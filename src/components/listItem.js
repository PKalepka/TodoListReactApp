import React from 'react';
import '../css/index.css';

export default class ListItem extends React.Component {
    renderCrossedText(text) {
        return (
            <s>{text}</s>
        );
    }

    render() {
        const note = this.props.note;
        const checkNote = this.props.onCheck;
        const deleteNote = this.props.onDelete;
        return (
            <li key={note.id}>
                <input type="checkbox"
                    checked={note.isChecked ? "checked" : ""}
                    onChange={() => checkNote(note.id)} />
                {note.isChecked ? this.renderCrossedText(note.text) : note.text}
                <button onClick={() => deleteNote(note.id)}>X</button>
            </li>
        );
    }
}