import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import '../css/components/TodoList.css';

export default function TodoList() {
  const selectItems = state => state.noteArray;
  const items = useSelector(selectItems);
  const item = items.map((note, index) => {
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
