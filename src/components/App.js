import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';
import getDefaultTodoList from "../services";
import { restoreState } from '../redux/actions/actionCreators';
import '../css/components/App.css';

class App extends React.Component {
  async componentDidMount() {
    const defaultData = await getDefaultTodoList();
    var noteArray = JSON.parse(defaultData);

    this.props.restoreState(noteArray);
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

const mapDispatchToProps = (dispatch) => {
  return {
    restoreState: (noteArray) => {
      var action = restoreState(noteArray);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
