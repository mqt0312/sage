import React from 'react'
import {Link} from 'react-router-dom'
import './WalkHeader.css'

const WalkHeader = () => {
    return (
        <div className="sage-walk-header-container">
            
            <Link to="/">
                <h1 className="sage-title">Sage</h1>
            </Link>
        </div>
    )
}

export default WalkHeader
