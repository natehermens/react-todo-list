import React, { useState } from 'react';

function TodoForm({ submit }) {
  const defaultValue = 'new todo';
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    if (value.length > 0) {
      submit(value);
    }
    if (!focused) {
      setValue(defaultValue);
    } else {
      setValue('');
    }
    event.preventDefault();
  }

  function handleOnFocus() {
    setFocused(true);
    if (value === defaultValue) {
      setValue('');
    }
  }

  function handleOnBlur() {
    setFocused(false);
    if (value === '') {
      setValue(defaultValue);
    }
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input className="formButton" type="submit" value="Add" />
      <input
        className="todoInput"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default TodoForm;
