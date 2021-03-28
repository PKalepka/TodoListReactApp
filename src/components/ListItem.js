import React from 'react';
import { store, deleteNote, checkNote } from '../redux/store';
import '../css/components/ListItem.css';

export default function ListItem(props) {
    const onChange = () => {
        var action = checkNote(props.note.id);
        store.dispatch(action);
    }
    const onClick = () => {
        var action = deleteNote(props.note.id);
        store.dispatch(action);
    }
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
