import React, {useState, useEffect} from 'react'
import Part1 from './part-1/Part1'
import Part2 from './Part2'
import Button from './common/Button'
import SageAppContext from './SageAppContext'
import './SageApp.css'


 
const SageApp = (props) => {
    
    const [appData, setAppData] = useState();
    useEffect(() => {
        
        const json = localStorage.getItem('appData');
        const savedAppData = JSON.parse(json);
        if (savedAppData) {
            setAppData(savedAppData);
        } else {
            setAppData({
                stage: 0,
                thoughts:[]
            });
        }

    }, [])
    useEffect(() => {
        const json = JSON.stringify(appData);
        localStorage.setItem('appData', json);
    }, [appData])

    

    const value = React.useMemo(() => ({
        appData,
        setAppData
      }), [appData]);
    
    const incrementStage = () => {
        setAppData({...appData, stage:Math.min(4, appData.stage+1)})
    };
    const decrementStage = () => {
        setAppData({...appData, stage:Math.max(0, appData.stage-1)})
    };
    let part;
    if (appData) {
        switch(appData.stage) {
            case 0:
                part = <Part1/>
                break;
            case 1:
                part = <Part2/>
                break;
            default:
                // TODO: See if we need a default case
                break;
        }
    }
    
    return (
        <SageAppContext.Provider value={value}>
            <div className="sage-app">
                <div className="sage-screen sage-part">
                    {/* {part} */}
                </div>
                <div className="sage-screen sage-btn-container" text=">">
                    <Button className="sage-btn-left" onClick={decrementStage}/>
                    {part}
                    <Button className="sage-btn-right" onClick={incrementStage}/>
                </div>
                
            </div>
        </SageAppContext.Provider>
        
        
        
    )
}

export default SageApp
