import React from 'react'

export const TodoItem = (props) => {
    return (
        <div className="input-group">
            <span className="input-group-addon">
                <input type="checkbox" defaultChecked={props.isComplete} />
            </span>
            <input type="text" className="form-control" placeholder={props.name} />
        </div>
    )
}

TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete: React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}