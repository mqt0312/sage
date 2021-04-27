import React, { useCallback } from 'react'
import {FaTimes} from 'react-icons/fa'
import './ThoughtCard.css'

const ThoughtCard = (props) => {
    const deleteCallBack = useCallback(
        () => {
            props.delete(props.t.id);
        },
        [props.delete],
    )
    return (
        <div className="sage-thought-card" onClick={() => props.staging(1)}>
            <p className="sage-thought-text">{props.t.text}</p>
            <FaTimes style={{
                color: '#7f9172ff', 
                cursor: 'pointer', 
                fontSize: '1em', 
                
            }} onClick={deleteCallBack} />
        </div>
    )
}

export default ThoughtCard
