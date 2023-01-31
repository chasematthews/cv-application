import React, {Component} from 'react';
import GeneralInfo from './CVInput/GeneralInfo'
import WorkExperience from './CVInput/WorkExperience'

class CVInput extends Component {

    render() {   
        const personalProps = this.props.infoProps.personalInfo;
        const handleChange = this.props.onChange;
    
        return (
            <div className='CVInputOutput'>
                <h2>CV Input</h2>
                <h3>Personal Information</h3>
                <GeneralInfo onChange={handleChange} personalProps={personalProps}/>
                <h3>Work Experience</h3>
                <WorkExperience />
            </div>
        )
    }
}

export default CVInput;