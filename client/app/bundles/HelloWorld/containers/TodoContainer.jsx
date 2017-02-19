import React from 'react';
import {TodoList} from '../components/todo/TodoList';

class TodoContainer extends React.Component{
  constructor(){
    super();
    this.state={
      todos: [
        {id: 1, name:'Learn react_on_rails', isComplete: false},
        {id: 2, name:'build some app', isComplete: false},
        {id: 3, name:'Ship it!', isComplete: false}
      ], currentTodo: 'current todo!'
    }
  }
  todoHandler(e){
    this.setState({
      currentTodo: e.target.value
    })
  };
  render(){
    return (
      <div>
        <h2>Hello from todo!</h2>
        <input type="text" onChange={this.todoHandler.bind(this)}/>
        Current todo: {this.state.currentTodo}
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoContainer;