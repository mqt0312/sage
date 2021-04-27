import React from 'react'
import ThoughtCard from './ThoughtCard'

const ThoughtDeck = (props) => {
    return (
        <div className="sage-thought-deck">
            {props.thoughts.map(t => 
                <ThoughtCard key={t.id} t={t} delete={props.delete} staging={props.staging}/>
            )}
        </div>
        
    )
}

export default ThoughtDeck
