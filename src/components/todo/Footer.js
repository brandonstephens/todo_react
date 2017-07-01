import React from 'react'
import {Link} from '../router'

export const Footer = () => {
    return (
        <div>
            <Link to='/'>All</Link>&nbsp;
            <Link to='/active'>Active</Link>&nbsp;
            <Link to='/complete'>Complete</Link>
        </div>
    )
}