import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    value: '',
    focused: false,
    default: 'new todo'
  };

  componentWillMount() {
    this.setState({ value: this.state.default });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    if (this.state.value.length > 0) {
      this.props.submit(this.state.value);
    }
    if (!this.state.focused) {
      this.setState({ value: this.state.default });
    } else {
      this.setState({ value: '' });
    }
    event.preventDefault();
  };

  handleOnFocus = () => {
    this.setState({ focused: true });
    if (this.state.value === this.state.default) {
      this.setState({ value: '' });
    }
  };

  handleOnBlur = () => {
    this.setState({ focused: false });
    if (this.state.value === '') {
      this.setState({ value: this.state.default });
    }
  };

  render() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit}>
        <input className="formButton" type="submit" value="Add" />
        <input
          className="todoInput"
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoForm;
