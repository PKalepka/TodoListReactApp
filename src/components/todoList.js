import React from 'react';
import ListItem from './listItem.js'
import '../css/index.css';

export default class TodoList extends React.Component {
  render() {
    const item = this.props.items.map(note => {
      return (
        <ListItem note={note}
          onCheck={this.props.onCheck}
          onDelete={this.props.onDelete} />
      )
    })

    return (
      <div>
        <ul>
          {item}
        </ul>
      </div>
    );
  }
}