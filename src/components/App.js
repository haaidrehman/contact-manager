import { HashRouter, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import '../css/style.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import UpdateContact from './UpdateContact';
import SearchBar from './SearchBar';
import { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/app';
import "firebase/database";
import firebaseConfig from '../firebase/firebaseConfig';
import { uuid } from 'uuidv4';

export let TransferDeleteItemHandler = createContext();

firebase.initializeApp(firebaseConfig);

function App() {

  let [contacts, setContacts] = useState([]);
  let [contactToSearch, setContactToSearch] = useState('');



  let addContactHandler = (getContacts) => {

    let dataToPost = {
      id: uuid(),
      ...getContacts
    };


    firebase.database().ref("contacts/" + dataToPost.id).set(dataToPost)
      .then(() => {
        setContacts([...contacts, dataToPost]);
      })
      .catch();

  }


  useEffect(() => {

    firebase.database().ref("contacts").on("value", snapshot => {
      let contactList = [];
      snapshot.forEach(snap => {
        contactList.push(snap.val());
      });

      setContacts(contactList);
    });

  }, []);


  let deleteItemHandler = async (id, e) => {

    e.preventDefault();

    let userRef = firebase.database().ref('contacts/' + id);

    userRef.remove().then(() => {
      let filteredContacts = contacts.filter((el) => {
        return el.id !== id;
      });

      setContacts(filteredContacts);

    });

  }


  let updateHandler = async (e, item) => {
    e.preventDefault();
    if (item.name === '' || item.email === '' || item.image === '') {
      alert('All fields are required!');
      return;
    }


    firebase.database().ref("contacts/" + item.id).update({ id: item.id, name: item.name, email: item.email, image: item.image })
      .then(() => {
        let newContactsObj = contacts.map((contact) => {
          return contact.id === item.id ? { id: item.id, name: item.name, email: item.email, image: item.image } : contact;

        });
        setContacts([...newContactsObj]);
        item.changeUrl('/');
      })
      .catch(() => {
        console.log('Facing problem to update');
      });

  }


  let getSearchedTextFromContactList = (text) => {
    setContactToSearch(text);
  }

  return (
    <>
      <HashRouter>
        <div className="container">
          <div className="add-contact-form center-align-item">
            <Header />
            <ContactList contactList={contacts} contactToSearch={contactToSearch} />
            <Switch>
              <Route exact path="/add" render={(props) => <AddContact {...props} addContactHandler={addContactHandler} />} />
              {/*  Using render function of Route Component the render function will receive some additional props just like above */}

              <Route exact path="/" render={() => {

                return (<TransferDeleteItemHandler.Provider value={{ deleteItemHandler: deleteItemHandler }}>
                  <SearchBar contacts={contacts} putSearchedText={getSearchedTextFromContactList} />
                  <ContactList contactList={contacts} contactToSearch={contactToSearch} />
                </TransferDeleteItemHandler.Provider>)
              }} />

              <Route exact path="/contact/:id" render={ContactDetail} />

              <Route exact path="/contact/edit/:id" render={(props) => <UpdateContact {...props} updateHandler={updateHandler} />} />

            </Switch>


          </div>
        </div>
      </HashRouter>
    </>
  );
}


export default App;
