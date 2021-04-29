import React from 'react'
import './Prompt.css'

const Prompt = (props) => {
    return (
        <div className="sage-prompt">
            <div>{props.text}</div>
            <div className="prompt-divider" />
        </div>

    )
}

export default Prompt
