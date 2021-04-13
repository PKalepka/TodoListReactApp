import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux/actions/actionCreators';
import '../css/components/Input.css';

function Input(props) {
    const [inputText, setInputText] = useState("");

    const inputChanged = (event) => {
        setInputText(event.target.value);
    };

    const addButtonClick = () => {
        if (inputText === "") {
            return;
        }

        setInputText("");

        props.addNote(inputText);
    };

    return (
        <div className="flex-input">
            <input type="text" value={inputText} onChange={inputChanged} />
            <button onClick={addButtonClick}>Add</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (inputText) => {
            var action = addNote(inputText);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Input);
