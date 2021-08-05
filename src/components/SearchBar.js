import { useState, useEffect } from 'react';

let SearchBar = (props) => {

    let [text, setText] = useState({ text: '' });

    let searchText = (e) => {
        setText({
            text: e.target.value
        });

        props.putSearchedText(e.target.value);
    }

    let removeText = () => {
        setText({
            text: ''
        });
        props.putSearchedText('');
    }


    return (
        <>
            <div className="row">
                <div className="col m12 s12">
                    <nav>
                        <div className="nav-wrapper">
                            <div className="input-field">
                                <input id="search" type="search" onChange={searchText} value={text.text} placeholder="Search contact here" />
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons" onClick={removeText}>close</i>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    );
}

export default SearchBar;