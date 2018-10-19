import React from 'react';

const TodoItem = ({ name, remove, index }) => (
  <div className="todoItem" onClick={() => remove(index)}>
    {name}
  </div>
);

export default TodoItem;
