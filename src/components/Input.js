import React, {useState} from 'react';
import '../css/components/Input.css';

export default function Input(props) {
    const [inputText, setInputText] = useState("");

    const inputChanged = (event) => {
        setInputText(event.target.value);
    };

    const addButtonClick = () => {
        if (inputText === "") {
            return;
        }

        setInputText("");
        props.onAdd(inputText);
    };

    return (
        <div className="flex-input">
            <input type="text" value={inputText} onChange={inputChanged} />
            <button onClick={addButtonClick}>Add</button>
        </div>
    );
}
