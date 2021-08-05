import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TransferDeleteItemHandler } from './App';

let ContactCard = ({ element }) => {

    let { name, email, id, image} = element;
    let getDeleteHandler = useContext(TransferDeleteItemHandler);  // This will use its nearest context
    let { deleteItemHandler } = getDeleteHandler;

    return (
        <li className="collection-item avatar" id={id} key={Math.random()}>
            <Link to={{ pathname: `/contact/${id}`, state: { contact: element} }}>
              <div className="account-picture">
                  <img src={image} />
              </div>
                <div className="user-details">
                    <span className="title">{name}</span>
                    <p>{email}</p>
                </div>
            </Link>

            <div>
                <a href="" className="secondary-content top delete-icon btn-floating btn-small pulse" onClick={(e) => deleteItemHandler(id, e)}><i className="small material-icons">delete</i></a>
            </div>
            <div>
                <Link to={{ pathname: `/contact/edit/${id}`, state: { contacts: element } }}>
                    <a href="" className="secondary-content down"><i className="small material-icons">edit</i></a>
                </Link>
            </div>



        </li >
    );
}

export default ContactCard;