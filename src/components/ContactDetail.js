import { useEffect } from 'react';
import { Link } from 'react-router-dom';

let ContactDetail = (props) => {

    let { id, name, email, image} = props.location.state.contact;
    
    return (
        <>
            <div className="add-contact-form center-align-item">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card center-align-item">
                            <div className="card-image">
                                 <img src={image} /> 
                               
                            </div>
                            <div className="card-content">
                                <span className="card-title title">{name}</span>
                                <p>{email}</p>
                            </div>
                            <div className="card-action">
                                <Link to="/">
                                    <a href="/">Go to contcat list</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ContactDetail;