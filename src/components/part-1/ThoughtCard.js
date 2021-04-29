import React, { useCallback } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import './ThoughtCard.css'

const ThoughtCard = (props) => {
    const deleteCallBack = useCallback(
        () => {
            props.delete(props.t.id);
        },
        [props.delete],
    )
    const checkBeforeEdit = () => {
        let textbox = document.getElementById("p1-textarea");
        if (textbox && !textbox.value) {
            props.edit(props.t.id);
        }
    }
    return (
        <div className="sage-thought-card">
            <p className="sage-thought-text">{props.t.text}</p>
            <div>
                <FaEdit style={{
                    color: '#7f9172ff', 
                    cursor: 'pointer', 
                    fontSize: '1em', 
                }} onClick={checkBeforeEdit} />
                <FaTimes style={{
                    color: '#7f9172ff', 
                    cursor: 'pointer', 
                    fontSize: '1em', 
                    
                }} onClick={deleteCallBack} />
                
            </div>
            
        </div>
    )
}

export default ThoughtCard
