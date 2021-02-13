import React from 'react';
import ListItem from './ListItem'
import '../css/components/TodoList.css';

export default function TodoList(props) {
  const item = props.items.map((note, index) => {
    return (
      <ListItem key={note.id + index}
        note={note}
        onCheck={props.onCheck}
        onDelete={props.onDelete} />
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
