import React from 'react';
import '../css/components/ListItem.css';

export default function ListItem(props) {
    const onChange = () => props.onCheck(props.note.id);
    const onClick = () => props.onDelete(props.note.id);
    const note = props.note;

    return (
        <li key={note.id} className="flex-listitem">
            <input type="checkbox"
                checked={note.isChecked ? "checked" : ""}
                onChange={onChange} />
            <div>
                {note.isChecked ? (<s>{note.text}</s>) : note.text}
            </div>
            <button onClick={onClick}>X</button>
        </li>
    );
}
