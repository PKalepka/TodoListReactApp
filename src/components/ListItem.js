import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, checkNote } from '../redux/actions/actionCreators';
import '../css/components/ListItem.css';

function ListItem(props) {
    const note = props.note;

    return (
        <li className="flex-listitem">
            <input type="checkbox"
                checked={note.isChecked ? "checked" : ""}
                onChange={props.onChange} />
            <div>
                {note.isChecked ? (<s>{note.text}</s>) : note.text}
            </div>
            <button onClick={props.onClick}>X</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: () => {
            var action = checkNote(ownProps.note.id);
            dispatch(action);
        },
        onClick: () => {
            var action = deleteNote(ownProps.note.id);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ListItem);