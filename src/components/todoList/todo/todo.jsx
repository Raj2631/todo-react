import React from 'react';
import classes from './todo.module.css';

function Todo(props) {
  const style = {
    textAlign: 'left',
    color: '#fff',
    fontSize: '14px',
    padding: '0.5rem 0.3rem',
    wordWrap: 'break-word'
  };

  return (
    <div onClick={props.remove} className={classes.div}>
      <p style={style}>{props.listItem.todo}</p>
    </div>
  );
}

export default Todo;
