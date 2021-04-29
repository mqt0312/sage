import React, {useState, useEffect, useContext} from 'react'
import {v4 as uuid4} from 'uuid'
import Prompt from '../common/Prompt'
import UserInput from '../common/UserInput'
import ThoughtDeck from './ThoughtDeck'
import SageAppContext from '../SageAppContext'




const Part1 = (props) => {
    
    const {appData, setAppData} = useContext(SageAppContext);
    const [thoughts, setThoughts] = useState(appData ? appData.thoughts : []);
    const [user_input_override, setUserInputOverride] = useState(undefined);

    const appDataMemo = React.useMemo(() => ({appData}), [appData]);
    useEffect(() => {
        if (appData) {
            setThoughts(appData.thoughts);
        }
        
    }, [appDataMemo]);
    
    
    useEffect(() => {
        setAppData({...appData, thoughts:thoughts});
        // return () => {
        //     console.log("Done", thoughts);
        //     setAppData({
        //         ...appData,
        //         thoughts: thoughts
        //     });
        // }fds
    }, [thoughts])
    
    const updateStage = (next_stage) => {
        console.log("staging");
        setAppData({...appData, stage:next_stage});
    }
    const updateThoughts = (t_text) => {
        t_text && setThoughts([...thoughts, {
            id: uuid4(),
            text: t_text
        }]);
    };
    const deleteThoughts = (id) => {
        id && setThoughts(thoughts.filter(t => t.id !== id));
        console.log("Deleting", id);
    };
    const editThought = (id) => {
        let thought = thoughts.find(t => t.id === id);
        if (thought) {
            let text = thought.text;
            console.log("Editing", id);
            setUserInputOverride(text);
            deleteThoughts(id);
        }    
    }
    const clearOverride = () => {
        setUserInputOverride(undefined);
    }

    return (
        <div className="sage-part-container">
            <Prompt text="What is on your mind?"/>
            <UserInput submit={updateThoughts} value={user_input_override} clearOverride={clearOverride}/>
            <ThoughtDeck thoughts={thoughts} delete={deleteThoughts} staging={updateStage} edit={editThought}/>
        </div>
    )
}

export default Part1
