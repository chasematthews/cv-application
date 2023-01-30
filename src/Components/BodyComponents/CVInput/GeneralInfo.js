import React, {Component} from 'react';
import CVOutputGeneralInfo from '../CVOutput/GeneralInfo';

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            mobile: ''
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {

        const infoProps = this.state;

        return (
            <form action="">
                <h3>Name</h3>
                <input
                    onChange={this.handleChange}
                    value={infoProps.name.text}
                    type = 'text'
                    name = 'name'
                />
                <h3>Email Address</h3>
                <input
                    onChange={this.handleChange}
                    value={infoProps.email.text}
                    type='email'
                    name='email'
                />
                <h3>Phone Number</h3>
                <input
                    onChange={this.handleChange}
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