import { useState, useEffect, useRef } from 'react';
import HandleUpload from './HandleUpload';

let UpdateContact = ({ location, history, updateHandler }) => {

    let [userDetails, setUserDetails] = useState({
        name: location.state.contacts.name,
        email: location.state.contacts.email,
        image: location.state.contacts.image
    });

    let imageTag = useRef();

    useEffect(() => {
        imageTag.current.src = userDetails.image;

    }, [userDetails.image]);

    let { name, email, image } = userDetails;


    let handleChange = (e, type) => {

        setUserDetails((prevState) => ({
            ...prevState,
            [type]: e.target.value
        }));
    }

    return (
        <>
            <div id="PreviewImage">
                        <img ref={imageTag} />
                    </div>
                <div className="row">
                    <div className="col m12 s12">
                        <h2 className="remove-space-sm">Update Contact</h2>
                        <form onSubmit={(e) => updateHandler(e, { id: location.state.contacts.id, ...userDetails, changeUrl: history.push })}>
                                <div className="row mb-70">
                                    <div className="input-field col s12">
                                        <input type="file" className="validate" id="uploadBtn" onChange={(e) => HandleUpload(e, '', setUserDetails)} hidden />
                                        <label for="uploadBtn" className="file-upload-wrapper">
                                            <div>
                                                <i class="material-icons">add_a_photo</i>
                                            </div>
                                        </label>

                                    </div>
                                </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" className="validate" value={name} onChange={(e) => handleChange(e, 'name')} />
                                    <label className="active" for="first_name2">Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" className="validate" value={email} onChange={(e) => handleChange(e, 'email')} />
                                    <label className="active" for="first_name2">Email</label>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit">
                                Update
                            </button>
                        </form>

                    </div>
                </div>
        </>
    );
}


export default UpdateContact;