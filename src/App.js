import React, { Component } from 'react'
import './App.css'
import { TodoForm, TodoList, Footer } from './components/todo'
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService'

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }
  
  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  handleRemove = (id, event) => {
    event.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
    destroyTodo(id).then(() => this.showTempMessage('Todo removed'))
  }

  handleToggle = (id) => {
    const getToggleTodo = pipe(findById, toggleTodo)
    const updated = getToggleTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated)
    this.setState({
      todos: updatedTodos
    })
    saveTodo(updated).then(() => this.showTempMessage('Todo Updated'))
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

    createTodo(newTodo).then(() => this.showTempMessage('Todo added'))
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
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

    const displayTodos = filterTodos(this.state.todos, this.context.route)

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

                {
                  this.state.message &&
                  <span className="label label-success">
                    {this.state.message}
                  </span>
                }

                <hr />

                <TodoList 
                  handleToggle={this.handleToggle} 
                  todos={displayTodos} 
                  handleRemove={this.handleRemove} 
                />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
