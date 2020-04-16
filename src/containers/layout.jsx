import React, { Component } from 'react';
import classes from './layout.module.css';
import Cockpit from '../components/cockpit';
import TodoList from '../components/todoList/todoList';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        { id: 0, todo: 'Need to wash my clothes' },
        { id: 1, todo: 'Need to wash my dog' },
        { id: 2, todo: 'Need to wash my cat' }
      ],
      value: ''
    };
  }

  handleChange = e => {
    const newValue = e.target.value;
    this.setState({
      value: newValue
    });
  };

  addTodo = e => {
    e.preventDefault();
    if (this.state.value.trim() !== '') {
      const todo = this.state.value;
      let newId;
      if (this.state.todoList.length === 0) {
        newId = 0;
      } else {
        newId = this.state.todoList[this.state.todoList.length - 1].id + 1;
      }

      const newTodo = {
        id: newId,
        todo: todo
      };
      const newTodoList = [...this.state.todoList];
      newTodoList.push(newTodo);
      this.setState({
        todoList: newTodoList,
        value: ''
      });
    } else {
      alert('The field should not be empty');
    }
  };

  deleteTodo = index => {
    const list = [...this.state.todoList];
    list.splice(index, 1);
    this.setState({
      todoList: list
    });
  };

  render() {
    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <Cockpit
            handleChange={e => this.handleChange(e)}
            handleSubmit={e => this.addTodo(e)}
            value={this.state.value}
          />
          <TodoList list={this.state.todoList} delete={this.deleteTodo} />
        </div>
      </div>
    );
  }
}
export default Layout;
