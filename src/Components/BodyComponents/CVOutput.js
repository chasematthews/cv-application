import React, {Component} from 'react';
import CVOutputGeneralInfo from './CVOutput/GeneralInfo'

class CVOutput extends Component {
    render() {
        const {infoProps} = this.props;

        return (
            <div className='CVInputOutput'>
                <h2>CV Output</h2>
                <CVOutputGeneralInfo infoProps={infoProps}/>
            </div>
        )
    }
}

export default CVOutput;