import React, { Component } from 'react'
import './App.css'
import { TodoForm, TodoList } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'foo', isComplete: true },
      { id: 2, name: 'bar', isComplete: false },
      { id: 3, name: 'baz', isComplete: false }
    ],
    currentTodo: ''
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({
      todos: updatedTodos
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.setState({
      errorMessage: 'Please add a todo'
    })
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

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
                  handleSubmit={submitHandler}
                />

                {
                  this.state.errorMessage &&
                  <span className="label label-danger">
                    {this.state.errorMessage}
                  </span>
                }

                <hr />

                <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
