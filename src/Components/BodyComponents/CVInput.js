import React, {Component} from 'react';
import GeneralInfo from './CVInput/GeneralInfo'
import WorkExperience from './CVInput/WorkExperience'
import EducationExperience from './CVInput/EducationExperience';

class CVInput extends Component {

    render() {   
        const personalProps = this.props.infoProps.personalInfo;
        const handleChange = this.props.onChange;
    
        return (
            <div className='CVInputOutput'>
                <h2>CV Input</h2>
                <GeneralInfo onChange={handleChange} personalProps={personalProps}/>
                <WorkExperience />
                <EducationExperience />
            </div>
        )
    }
}

export default CVInput;