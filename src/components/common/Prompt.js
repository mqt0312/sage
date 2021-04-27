import React from 'react'
import './Prompt.css'

const Prompt = (props) => {
    return (
        <div className="sage-prompt">
            {props.text}
        </div>
    )
}

export default Prompt
