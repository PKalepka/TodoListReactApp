import React from 'react';
import '../css/components/ListItem.css';

export default class ListItem extends React.Component {
    onChange = () => this.props.onCheck(this.props.note.id);

    onClick = () => this.props.onDelete(this.props.note.id);

    render() {
        const note = this.props.note;
    
        return (
            <li key={note.id} className="flex-listitem">
                <input type="checkbox"
                    checked={note.isChecked ? "checked" : ""}
                    onChange={this.onChange} />
                <div>
                    {note.isChecked ? (<s>{note.text}</s>) : note.text}
                </div>
                <button onClick={this.onClick}>X</button>
            </li>
        );
    }
}