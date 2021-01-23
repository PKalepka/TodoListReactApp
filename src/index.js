import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  

  class TodoList extends React.Component {
    renderCrossedText(text){
      return (
        <s>{text}</s>
      );
    }

    render(){
      const item = this.props.items.map(note => {
        return (
          <li key={note.id}>
            <input type="checkbox" checked={note.isChecked?"checked":""} onChange={note.check}></input>
            {note.isChecked ? this.renderCrossedText(note.text) : note.text}
            <button onClick={note.delete}>X</button>
          </li>
        )
      })

      return(
        <ul>
          {item}
        </ul>
      );
    }
  }

  class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {noteArray: []};      
      this.inputTextRef = React.createRef();
      this.addButtonClick = this.addButtonClick.bind(this);
    }

    getUniqueId(){
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    deleteNote(id){
      var newArray = this.state.noteArray.filter(note => {
        return note.id !== id;
      });
      this.setState({noteArray: newArray});
    }

    checkNote(id){
      var newArray = this.state.noteArray.map(note => {
        if (note.id === id){
          note.isChecked = !note.isChecked;
          return note;
        }

        return note;
      });
      this.setState({noteArray: newArray});
    }

    addButtonClick(){
      const inputText = this.inputTextRef.current.value;
      this.inputTextRef.current.value = "";

      if (inputText !== ""){
        var newArray = this.state.noteArray;
        var uid = this.getUniqueId();
        var newNote = {
          id: uid,
          isChecked: false,
          text: inputText,
          check: () => this.checkNote(uid),
          delete: () => this.deleteNote(uid)
        }
        newArray.push(newNote);
        this.setState(newArray);
      }      
    }

    render() {
      return (
        <div>
          <h2>
            Todo List
          </h2>
          <div>
            <input type="text" ref={this.inputTextRef}/>
            <button onClick={this.addButtonClick}>Add</button>
          </div>
          <div>
            <TodoList items={this.state.noteArray}/>            
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  