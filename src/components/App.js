import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  state = {
    list: []
  };

  handleUpdate = indx => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== indx)
    });
  };

  handleSubmit = value => {
    this.setState({ list: [...this.state.list, value] });
  };

  render() {
    return (
      <div className="app">
        <TodoForm submit={this.handleSubmit} />
        <TodoList update={this.handleUpdate} list={this.state.list} />
      </div>
    );
  }
}

export default App;
