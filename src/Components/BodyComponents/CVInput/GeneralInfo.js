import React, {Component} from 'react';
import CVOutputGeneralInfo from '../CVOutput/GeneralInfo';

class GeneralInfo extends Component {
    render() {
        const infoProps = this.props.infoProps;
        const handleChange = this.props.onChange;

        return (
            <form action="">
                <h3>Name</h3>
                <input
                    onChange={(event) => handleChange(event)}
                    value={infoProps.name.text}
                    type = 'text'
                    name = 'name'
                />
                <h3>Email Address</h3>
                <input
                    onChange={(event) => handleChange(event)}
                    value={infoProps.email.text}
                    type='email'
                    name='email'
                />
                <h3>Phone Number</h3>
                <input
                    onChange={(event) => handleChange(event)}
                    value={infoProps.mobile.text}
                    type='text'
                    name='mobile'
                />
                <button type='submit'>Submit</button>
                <CVOutputGeneralInfo infoProps = {infoProps}/>
            </form>
        )
    }
}

export default GeneralInfo