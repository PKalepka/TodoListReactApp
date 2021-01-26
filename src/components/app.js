import React from 'react';
import Header from './header.js';
import Input from './input.js';
import TodoList from './todoList.js';
import '../css/index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { noteArray: [] };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.checkNote = this.checkNote.bind(this);
  }

  getUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  addNote(inputText) {
    if (inputText === "") {
      return;
    }

    var newArray = this.state.noteArray;
    var uid = this.getUniqueId();
    var newNote = {
      id: uid,
      isChecked: false,
      text: inputText
    }
    newArray.push(newNote);
    this.setState(newArray);
  }

  deleteNote(id) {
    var newArray = this.state.noteArray.filter(note => {
      return note.id !== id;
    });
    this.setState({ noteArray: newArray });
  }

  checkNote(id) {
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
