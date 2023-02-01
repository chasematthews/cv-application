import React from 'react';
import GeneralInfo from './CVInput/GeneralInfo'
import WorkExperience from './CVInput/WorkExperience'
import EducationExperience from './CVInput/EducationExperience';

const CVInput = (props) => {
    const personalProps = props.infoProps.personalInfo;
    const handleChange = props.onChange;

    return (
        <div className='CVInputOutput'>
            <h2>CV Input</h2>
            <GeneralInfo onChange={handleChange} personalProps={personalProps}/>
            <WorkExperience />
            <EducationExperience />
        </div>
    )
}

export default CVInput;