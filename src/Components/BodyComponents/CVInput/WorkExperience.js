import React, {Component} from 'react';

class WorkExperience extends Component {
    render() {
        return (
            <div>
                <h2>Work Experience</h2>
                <form action="">
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
                    <h3>Finish Date</h3>
                    <input
                        type='date'
                        name='finishDate'
                    />
                </form>
            </div>
        )
    }
}

export default WorkExperience