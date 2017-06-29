import React, { Component } from 'react';
import './App.css';
import {TodoForm, TodoList} from './components/todo';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'foo', isComplete: true },
        { id: 2, name: 'bar', isComplete: false },
        { id: 3, name: 'baz', isComplete: false }
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center">React Todos</h2>

            <div className="row">
              <div className="col-sm-4 col-sm-offset-4">

                <TodoForm 
                  handleInputChange={this.handleInputChange} 
                  currentTodo={this.state.currentTodo}
                />

                <hr />

                <TodoList todos={this.state.todos}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
