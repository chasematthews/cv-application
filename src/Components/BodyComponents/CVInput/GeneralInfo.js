import React, {Component} from 'react';

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
                <h3>Address</h3>
                <input
                    onChange={(event) => handleChange(event)}
                    value={infoProps.address.text}
                    type='text'
                    name='address'
                />
                <h3>Linkedin Link</h3>
                <input
                    onChange={(event) => handleChange(event)}
                    value={infoProps.linkedin.text}
                    type='text'
                    name='linkedin'
                />
                <h3>Github Link</h3>
                <input
                    onChange={(event) => handleChange(event)}
                    value={infoProps.github.text}
                    type='text'
                    name='github'
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default GeneralInfo