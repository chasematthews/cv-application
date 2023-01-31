import React, {Component} from 'react';

class GeneralInfo extends Component {
    render() {
        const personalProps = this.props.personalProps;
        const handleChange = this.props.onChange;

        return (
            <div>
                <h2>Personal Information</h2>
                <form action="">
                    <h3>Name</h3>
                    <input
                        onChange={(event) => handleChange(event)}
                        value={personalProps.name.text}
                        type = 'text'
                        name = 'name'
                    />
                    <h3>Email Address</h3>
                    <input
                        onChange={(event) => handleChange(event)}
                        value={personalProps.email.text}
                        type='email'
                        name='email'
                    />
                    <h3>Phone Number</h3>
                    <input
                        onChange={(event) => handleChange(event)}
                        value={personalProps.mobile.text}
                        type='text'
                        name='mobile'
                    />
                    <h3>Address</h3>
                    <input
                        onChange={(event) => handleChange(event)}
                        value={personalProps.address.text}
                        type='text'
                        name='address'
                    />
                    <h3>Linkedin Link</h3>
                    <input
                        onChange={(event) => handleChange(event)}
                        value={personalProps.linkedin.text}
                        type='text'
                        name='linkedin'
                    />
                    <h3>Github Link</h3>
                    <input
                        onChange={(event) => handleChange(event)}
                        value={personalProps.github.text}
                        type='text'
                        name='github'
                    />
                </form>
            </div>
        )
    }
}

export default GeneralInfo