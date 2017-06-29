import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
    return (
        <ul className="list-group">
            {
                props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
            }
        </ul>
    )
}


TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}