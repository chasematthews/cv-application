import React, { useState } from 'react';
import CVInput from './BodyComponents/CVInput'
import CVOutput from './BodyComponents/CVOutput'
import CVTemplate from './Utils/CVInfo';

const Body = () => {
    const [CVInfo, setCVInfo] = useState(CVTemplate);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setCVInfo({
            personalInfo: {
                ...CVInfo.personalInfo,
                [name]: value,
            }
        })

        console.log(CVInfo)
    }

    return (
        <div className='body'>
            <CVInput onChange={handleChange} infoProps={CVInfo}/>
            <CVOutput infoProps={CVInfo}/>
        </div>
    )
}

export default Body;