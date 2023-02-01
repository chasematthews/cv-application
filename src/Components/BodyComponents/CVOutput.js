import React from 'react';
import CVOutputGeneralInfo from './CVOutput/GeneralInfo'

const CVOutput = (props) => {
    const personalProps = props.infoProps.personalInfo;
        
    return (
        <div className='CVInputOutput'>
            <h2>CV Output</h2>
            <CVOutputGeneralInfo personalProps={personalProps}/>
        </div>
    )
}

export default CVOutput;