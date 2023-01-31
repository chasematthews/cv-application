import React, { Component } from 'react';
import CVInput from './BodyComponents/CVInput'
import CVOutput from './BodyComponents/CVOutput'
import CVInfo from './Utils/CVInfo';

class Body extends Component {

    constructor() {
        super();

        this.state = CVInfo.personalInfo;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='body'>
                <CVInput onChange={this.handleChange} infoProps={this.state}/>
                <CVOutput infoProps={this.state}/>
            </div>
        )
    }
}

export default Body;