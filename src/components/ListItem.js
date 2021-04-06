import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, checkNote } from '../redux/store';
import '../css/components/ListItem.css';

function ListItem(props) {
    const note = props.note;

    return (
        <li key={note.id} className="flex-listitem">
            <input type="checkbox"
                checked={note.isChecked ? "checked" : ""}
                onChange={() => props.onChange(note.id)} />
            <div>
                {note.isChecked ? (<s>{note.text}</s>) : note.text}
            </div>
            <button onClick={() => props.onClick(note.id)}>X</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (id) => {
            var action = checkNote(id);
            dispatch(action);
        },
        onClick: (id) => {
            var action = deleteNote(id);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ListItem);