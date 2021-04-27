import React, {useCallback} from 'react';
import "./UserInput.css";

function detectSubmit(e, callBack) {
    
    let keycode = e.keyCode;//window.event.keyCode;
    console.log(keycode === 13);
    
    if (keycode === 13 && !e.shiftKey) {
        e.preventDefault();
        let textbox = document.getElementById("p1-textarea")
        console.log(textbox.value);
        textbox.value && callBack(textbox.value);
        textbox.value = '';
        textAreaAdjust(e.target);
        return true;
    }
    return false;
}


const UserInput = (props) => {
    const keydownCallBack = useCallback(
        (e) => {
            detectSubmit(e, props.submit);
        },
        [props.submit],
    )
    return (
        <div className="sage-user-input-container">
            <textarea 
                onChange={(e) => textAreaAdjust(e.target)} 
                rows={3} 
                placeholder="Type here..." 
                id="p1-textarea" 
                onKeyDown={keydownCallBack} />
        </div>
    )
}

UserInput.initial_height_recorded = 0;

function textAreaAdjust(element) {
    console.log(element.scrollHeight, element.style.height);
    if (!UserInput.initial_height_recorded) {
        UserInput.initial_height = element.scrollHeight;
        UserInput.initial_height_recorded = true;
    }
    element.style.height = "1px";
    element.style.height = Math.max(element.scrollHeight, UserInput.initial_height)+"px";
}

export default UserInput
