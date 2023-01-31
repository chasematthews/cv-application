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
            <div>
                <h2>Work Experience</h2>
                <div>
                    {this.state.customDiv.map((workExperience) => {
                        return (
                            <form action="" key={workExperience}>
                                <h3>Company</h3>
                                <input
                                    type = 'text'
                                    name = 'company'
                                />
                                <h3>Job Title</h3>
                                <input
                                    type='text'
                                    name='jobTitle'
                                />
                                <h3>Job Description</h3>
                                <input
                                    type='text'
                                    name='jobDescription'
                                />
                                <h3>Start Date</h3>
                                <input
                                    type='date'
                                    name='startDate'
                                />
                                <h3>End Date</h3>
                                <input
                                    type='date'
                                    name='endDate'
                                />
                            </form>
                        )
                    })}
                </div>
                    <button onClick = {(event) => this.addWorkExperience(event)}>Add Work Experience</button>
            </div>
        )
    }
}

export default WorkExperience