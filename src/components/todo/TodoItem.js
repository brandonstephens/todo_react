import React from 'react'

export const TodoItem = (props) => {
    return (
        <li className="list-group-item">
            <input type="checkbox" defaultChecked={props.isComplete} />&nbsp;{props.name}
        </li>
    )
}

TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}