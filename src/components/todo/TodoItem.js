import React from 'react'
import { partial } from '../../lib/utils'

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)
    const handleRemove = partial(props.handleRemove, props.id)

    return (
        <li className="list-group-item">
            <input
                type="checkbox"
                checked={props.isComplete}
                onChange={handleToggle}
            /> &nbsp; {props.name}
            <a
                href="#"
                onClick={handleRemove}
                className="label label-danger pull-right"
            >
                remove
            </a>
        </li>
    )
}

TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}