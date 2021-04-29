import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div {...props}>
            <div>{props.text}</div>
        </div>
    )
}

export default Button
