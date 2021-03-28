import React, { useState } from 'react';
import { store, addNote } from '../redux/store';
import '../css/components/Input.css';

export default function Input() {
    const [inputText, setInputText] = useState("");

    const inputChanged = (event) => {
        setInputText(event.target.value);
    };

    const addButtonClick = () => {
        if (inputText === "") {
            return;
        }

        setInputText("");

        var action = addNote(inputText);
        store.dispatch(action);
    };

    return (
        <div className="flex-input">
            <input type="text" value={inputText} onChange={inputChanged} />
            <button onClick={addButtonClick}>Add</button>
        </div>
    );
}
