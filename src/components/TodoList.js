import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import '../css/components/TodoList.css';

function TodoList(props) {
  const item = props.items.map((note, index) => {
    return (
      <ListItem key={note.id + index}
        note={note} />
    )
  })

  return (
    <div className="flex-todolist">
      <ul>
        {item}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.noteArray
  }
};

export default connect(mapStateToProps)(TodoList)