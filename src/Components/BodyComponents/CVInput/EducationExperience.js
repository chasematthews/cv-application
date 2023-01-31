import React, {Component} from 'react';

class EducationExperience extends Component {

    constructor() {
        super();
        this.state = {
            customDiv: ['EducationExperience1']
        }
    }

    addEducationExperience = (event) => {
        event.preventDefault();
        let cDivs = [...this.state.customDiv];
        cDivs.push('newDiv')
        this.setState({
            customDiv: cDivs
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className='education-experience'>
                <h3>Education Experience</h3>
                {this.state.customDiv.map((educationExperience, i) => {
                    return (
                        <div className='education-experience-input'>
                            <h4 className='education-experience-input-title'>Education Experience {i+1}</h4>
                            <form action="" key={educationExperience}>
                                <div className='form-row'>
                                    <div className='form-column'>
                                        <h5>School</h5>
                                        <input
                                            type = 'text'
                                            name = 'company'
                                        />
                                        <h5>Degree</h5>
                                        <input
                                            type='text'
                                            name='jobTitle'
                                        />
                                    </div>
                                    <div className='form-column'>
                                        <h5>Start Date</h5>
                                        <input
                                            type='date'
                                            name='startDate'
                                        />
                                        <h5>End Date</h5>
                                        <input
                                            type='date'
                                            name='endDate'
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                })}
                    <button onClick = {(event) => this.addEducationExperience(event)}>Add Education Experience</button>
            </div>
        )
    }
}

export default EducationExperience