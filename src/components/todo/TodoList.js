import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
    return (
        <ul className="list-group">
            {
                props.todos.map(todo => 
                    <TodoItem 
                        handleToggle={props.handleToggle} 
                        key={todo.id} 
                        {...todo}
                        handleRemove={props.handleRemove}
                    />
                )
            }
        </ul>
    )
}


TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}