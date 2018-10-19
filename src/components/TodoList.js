import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list, update }) => (
  <div className="todoList">
    {list.map((item, i) => (
      <TodoItem key={i} index={i} name={item} remove={() => update(i)} />
    ))}
  </div>
);

export default TodoList;
