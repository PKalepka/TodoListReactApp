import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';
import '../css/components/App.css';

export default class App extends React.Component {
  state = { noteArray: [] };

  addNote = (inputText) => {
    var newArray = [...this.state.noteArray,
    {
      id: uuidv4(),
      isChecked: false,
      text: inputText
    }]
    this.setState({ noteArray: newArray });
  }

  deleteNote = (id) => {
    var newArray = this.state.noteArray.filter(note => {
      return note.id !== id;
    });
    this.setState({ noteArray: newArray });
  }

  checkNote = (id) => {
    var newArray = this.state.noteArray.map(note => {
      if (note.id === id) {
        note.isChecked = !note.isChecked;
        return note;
      }

      return note;
    });
    this.setState({ noteArray: newArray });
  }

  render() {
    return (
      <div className="flex-container">
        <Header />
        <Input
          onAdd={this.addNote} />
        <TodoList
          items={this.state.noteArray}
          onDelete={this.deleteNote}
          onCheck={this.checkNote} />
      </div>
    );
  }
}
