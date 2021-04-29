import React, {useState,useCallback} from 'react';
import "./UserInput.css";

function detectSubmit(e, callBack) {
    
    let keycode = e.keyCode;//window.event.keyCode;
    
    if (keycode === 13 && !e.shiftKey) {
        e.preventDefault();
        let textbox = document.getElementById("p1-textarea");
        textbox.value && callBack(textbox.value);
        textbox.value = '';
        textAreaAdjust(e.target);
        return true;
    }
    return false;
}

const UserInput = (props) => {
    const {force_render, forceRender} = useState(0);
    const keydownCallBack = useCallback(
        (e) => {
            detectSubmit(e, props.submit);
        },
        [props.submit],
    )
    const userInputOverride = () => {
        let textbox = document.getElementById("p1-textarea");
        if (textbox && !textbox.value && props.value) {
            let override = props.value;
            // setUserInputOverride(props.value);
            props.clearOverride(); // FIXME: Bad setState. Calling setState for a state in Part1. 
            return override
            
        } else {
            // setUserInputOverride(undefined);
            return undefined;
        }
    }
    
    const override_memo = React.useMemo(() => userInputOverride(), [props.value])
    
    return (
        <div className="sage-user-input-container">
            <textarea 
                value={override_memo}
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
    if (!UserInput.initial_height_recorded) {
        UserInput.initial_height = element.scrollHeight;
        UserInput.initial_height_recorded = true;
    }
    element.style.height = "1px";
    element.style.height = Math.max(element.scrollHeight, UserInput.initial_height)+"px";
}

export default UserInput
