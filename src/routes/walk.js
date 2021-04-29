import React from 'react'
import SageApp from '../components/SageApp'
import WalkHeader from '../components/common/WalkHeader'


const WalkRoute = () => {
    return (
        <div className="sage-walk-route"> 
            <WalkHeader/>
            <SageApp />
        </div>
    )
}

export default WalkRoute
