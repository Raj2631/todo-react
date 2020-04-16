import React from 'react';
import classes from './cockpit.module.css';

function Cockpit(props) {
  return (
    <form className={classes.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        className={classes.input}
        placeholder="Enter stuff here"
        onChange={props.handleChange}
        value={props.value}
      />
      <button className={classes.btn}>Add</button>
    </form>
  );
}

export default Cockpit;
