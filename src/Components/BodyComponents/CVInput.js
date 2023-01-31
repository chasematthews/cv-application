import React, {Component} from 'react';
import GeneralInfo from './CVInput/GeneralInfo'

class CVInput extends Component {

    render() {   
        const infoProps = this.props.infoProps;
        const handleChange = this.props.onChange;
    
        return (
            <div className='CVInputOutput'>
                <h2>CV Input</h2>
                <GeneralInfo onChange={handleChange} infoProps={infoProps}/>
            </div>
        )
    }
}

export default CVInput;