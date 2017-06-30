import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)

    return (
        <li className="list-group-item">
            <input type="checkbox" checked={props.isComplete} onChange={handleToggle} />&nbsp;{props.name}
        </li>
    )
}

TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}