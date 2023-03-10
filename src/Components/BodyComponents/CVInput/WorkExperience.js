import React, {Component} from 'react';

class WorkExperience extends Component {

    constructor() {
        super();
        this.state = {
            customDiv: ['WorkExperience1']
        }
    }

    addWorkExperience = (event) => {
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
            <div className='work-experience'>
                <h3>Work Experience</h3>
                {this.state.customDiv.map((workExperience, i) => {
                    return (
                        <div className='work-experience-input'>
                            <h4 className='work-experience-input-title'>Work Experience {i+1}</h4>
                            <form action="" key={workExperience}>
                                <div className='form-row'>
                                    <div className='form-column'>
                                        <h5>Company</h5>
                                        <input
                                            type = 'text'
                                            name = 'company'
                                        />
                                        <h5>Job Title</h5>
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
                                <h5>Job Description</h5>
                                <textarea
                                    type='text'
                                    name='jobDescription'
                                />
                            </form>
                        </div>
                    )
                })}
                    <button onClick = {(event) => this.addWorkExperience(event)}>Add Work Experience</button>
            </div>
        )
    }
}

export default WorkExperience