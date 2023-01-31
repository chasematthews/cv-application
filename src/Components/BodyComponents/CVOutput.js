import React, {Component} from 'react';
import CVOutputGeneralInfo from './CVOutput/GeneralInfo'

class CVOutput extends Component {
    render() {
        const personalProps = this.props.infoProps.personalInfo;
        
        return (
            <div className='CVInputOutput'>
                <h2>CV Output</h2>
                <CVOutputGeneralInfo personalProps={personalProps}/>
            </div>
        )
    }
}

export default CVOutput;