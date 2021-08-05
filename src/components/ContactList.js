import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

let ContactList = ({ contactList, contactToSearch }) => {
    let newList = [{ name: 'Haaid' }];
    let selectContactList = contactList;
    let output = '';
   
    newList = contactList.filter((contact) => {
        let text = contact.name + contact.email;
        // console.log(text.split(' ').join('').toLowerCase());
        if (contactToSearch !== '') {
            if (text.toLowerCase().includes(contactToSearch.toLowerCase().trim())) {
                // console.log((contact.name + contact.email).trim());
                return contact;
            }
        }



    });

    if (contactToSearch.trim() !== '') {
        selectContactList = newList;
    }

    let renderContactList = selectContactList.map((element) => {
        return (
            <ContactCard element={element} />
        );
    });

    
    if(selectContactList.length > 0 ){
        output = renderContactList;
    }
    else if(contactToSearch.trim() !== '' && selectContactList.length === 0){
        output = <li className="collection-item avatar no-record-li" ><span className="center-align valign-wrapper">No contact found!</span></li>;
    }
    else{
        output = <li className="collection-item avatar no-record-li" ><span className="center-align valign-wrapper">No records</span></li>
    }


    return (
        <>
            <div className="row">
                <div className="col m6 s6">
                    <h2 className="remove-default-height">Contact List</h2>
                </div>
                <div className="col m6 s6">
                    <div className="right-align">
                        <Link to="/add">
                            <button className="btn waves-effect waves-light" type="submit">
                                Add
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <ul className="collection">
                {output}
            </ul>
        </>
    );
}

export default ContactList;