import React, {Component} from 'react';
import GeneralInfo from './CVInput/GeneralInfo'

class CVInput extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            mobile: ''
        }
    }

    render() {
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
    
            this.setState({
                [name]: value
            })
        }
    
        const infoProps = this.state;
    
        return (
            <div className='CVInputOutput'>
                <h2>CV Input</h2>
                <GeneralInfo onChange={handleChange} infoProps={infoProps}/>
            </div>
        )
    }
}

export default CVInput;