import React from 'react';
import Todo from './todo/todo';
import classes from './todoList.module.css';

function TodoList(props) {
  const list = props.list.map((item, index) => (
    <Todo listItem={item} key={item.id} remove={() => props.delete(index)} />
  ));

  return <div className={classes.todoContainer}>{list}</div>;
}

export default TodoList;
