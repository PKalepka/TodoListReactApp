import React from 'react';
import ListItem from './listItem.js'
import '../css/components/todoList.css';

export default class TodoList extends React.Component {
  render() {
    const item = this.props.items.map((note, index) => {
      return (
        <ListItem key={note.id + index}
          note={note}
          onCheck={this.props.onCheck}
          onDelete={this.props.onDelete} />
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
}