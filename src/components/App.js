import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [list, setList] = useState([]);

  function handleUpdate(indx) {
    setList(list.filter((item, index) => index !== indx));
  }

  function handleSubmit(value) {
    setList([...list, value]);
  }

  return (
    <div className="app">
      <TodoForm submit={handleSubmit} />
      <TodoList update={handleUpdate} list={list} />
    </div>
  );
}

export default App;
