import React from 'react'
import Prompt from './common/Prompt'
import SageAppContext from './SageAppContext'
import './Part2.css'

const Card = (props) => {
    return (
        <div className="sage-card">
            <div>{props.text}</div>
        </div>
    )
        
    
}

const Part2 = () => {
    const {appData, setAppData} = React.useContext(SageAppContext);
    const thoughts = appData.thoughts;
    return (
        <div className="sage-part-container">
            <Prompt text="Pick one"/>
            <div className="sage-card-container">
                {thoughts.map((t) => <Card text={t.text} />)}
                {/* <Card text="Hello world" />
                <Card text="Hello world 2" />
                <Card text="Hello world 3" />
                <Card text="Hello world 4" />
                <Card text="Hello world 5" />
                <Card text="Hello world 6" /> */}

            </div>
            
        </div>
    )
}

export default Part2
