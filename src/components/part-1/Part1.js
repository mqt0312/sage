import React, {useState, useEffect, useContext} from 'react'
import {v4 as uuid4} from 'uuid'
import Prompt from '../common/Prompt'
import UserInput from '../common/UserInput'
import ThoughtDeck from './ThoughtDeck'
import SageAppContext from '../SageAppContext'




const Part1 = (props) => {
    
    const {appData, setAppData} = useContext(SageAppContext);
    const [thoughts, setThoughts] = useState(appData ? appData.thoughts : []);

    const appDataMemo = React.useMemo(() => ({appData}), [appData]);
    useEffect(() => {
        if (appData) {
            setThoughts(appData.thoughts);
        }
        
    }, [appDataMemo]);
    
    
    useEffect(() => {
        setAppData({...appData, thoughts:thoughts});
        console.log("Updated");
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
        console.log(thoughts);
    };
    const deleteThoughts = (id) => {
        id && setThoughts(thoughts.filter(t => t.id !== id));
        console.log(thoughts);
    };
    return (
        <div className="sage-part-1-container">
            <Prompt text="What is on your mind?"/>
            <UserInput submit={updateThoughts}/>
            <ThoughtDeck thoughts={thoughts} delete={deleteThoughts} staging={updateStage}/>
        </div>
    )
}

export default Part1
