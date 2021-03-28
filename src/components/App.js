import React from 'react';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';
import getDefaultTodoList from "../services";
import { store, restoreState } from '../redux/store';
import '../css/components/App.css';

export default class App extends React.Component {
  async componentDidMount() {
    const defaultData = await getDefaultTodoList();
    var noteArray = JSON.parse(defaultData);

    var action = restoreState(noteArray);
    store.dispatch(action);

    store.subscribe(() =>
      this.setState({ noteArray: noteArray }));
  }

  render() {
    return (
      <div className="flex-container">
        <Header />
        <Input />
        <TodoList />
      </div>
    );
  }
}
