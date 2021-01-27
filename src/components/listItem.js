import React from 'react';
import '../css/components/listItem.css';

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
            <li key={note.id} className="flex-listitem">
                <input type="checkbox"
                    checked={note.isChecked ? "checked" : ""}
                    onChange={() => checkNote(note.id)} />
                <div>
                    {note.isChecked ? this.renderCrossedText(note.text) : note.text}
                </div>
                <button onClick={() => deleteNote(note.id)}>X</button>
            </li>
        );
    }
}