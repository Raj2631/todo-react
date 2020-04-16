import React from 'react';
import classes from './todo.module.css';

function Todo(props) {
  const style = {
    textAlign: 'left',
    color: '#000',
    padding: '0.5rem 0.3rem'
  };

  return (
    <div onClick={props.remove} className={classes.div}>
      <p style={style}>{props.listItem.todo}</p>
    </div>
  );
}

export default Todo;
