import React, {Component} from 'react';

class GeneralInfo extends Component {
    render() {
        const personalProps = this.props.personalProps;
        const handleChange = this.props.onChange;

        return (
            <div className='general-information'>
                <h3>Personal Information</h3>
                <form action="" className='form-row'>
                    <div className='form-col'>
                        <h5>Name</h5>
                        <input
                            onChange={(event) => handleChange(event)}
                            value={personalProps.name.text}
                            type = 'text'
                            name = 'name'
                        />
                        <h5>Email Address</h5>
                        <input
                            onChange={(event) => handleChange(event)}
                            value={personalProps.email.text}
                            type='email'
                            name='email'
                        />
                        <h5>Phone Number</h5>
                        <input
                            onChange={(event) => handleChange(event)}
                            value={personalProps.mobile.text}
                            type='text'
                            name='mobile'
                        />
                    </div>
                    <div className='form-col'>
                        <h5>Address</h5>
                        <input
                            onChange={(event) => handleChange(event)}
                            value={personalProps.address.text}
                            type='text'
                            name='address'
                        />
                        <h5>Linkedin Link</h5>
                        <input
                            onChange={(event) => handleChange(event)}
                            value={personalProps.linkedin.text}
                            type='text'
                            name='linkedin'
                        />
                        <h5>Github Link</h5>
                        <input
                            onChange={(event) => handleChange(event)}
                            value={personalProps.github.text}
                            type='text'
                            name='github'
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default GeneralInfo