import React, {useState, useEffect, Provider} from 'react'
import Part1 from './part-1/Part1'
import Part2 from './Part2'
import SageAppContext from './SageAppContext'
import './SageApp.css'


 
const SageApp = (props) => {
    
    const [appData, setAppData] = useState();
    useEffect(() => {
        
        const json = localStorage.getItem('appData');
        const savedAppData = JSON.parse(json);
        console.log("mounting sageapp", savedAppData);
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
      }), [appData])

    let part;
    if (appData) {
        switch(appData.stage) {
            case 0:
                part = <Part1/>
                break;
            case 1:
                part = <Part2/>
                break;
        }
    }
        
    return (
        <SageAppContext.Provider value={value}>
            <div className="sage-app">
                {part}
                
            </div>
        </SageAppContext.Provider>
        
        
        
    )
}

export default SageApp
