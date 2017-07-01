/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/

import React, {Component} from 'react'

export class Link extends Component {
    static contextTypes = {
        route: React.PropTypes.string,
        linkHandler: React.PropTypes.func
    }

    handleClick = (event) => {
        event.preventDefault()
        this.context.linkHandler(this.props.to)
    }

    render() {
        const activeClass = this.context.route === this.props.to ? 'btn-info' : 'btn-link'
        return (
            <a
                href="#"
                onClick={this.handleClick}
                className={`btn ` + activeClass}
            >
                {this.props.children}
            </a>
        )
    }
}

Link.propTypes = {
    to: React.PropTypes.string.isRequired
}