import React, { Component } from "react";

class CVOutputGeneralInfo extends Component {

    render() {
        const {personalProps} = this.props;

        return (
            <div>
                <h3>{personalProps.name}</h3>
                <h3>{personalProps.email}</h3>
                <h3>{personalProps.mobile}</h3>
                <h3>{personalProps.address}</h3>
                <h3>{personalProps.linkedin}</h3>
                <h3>{personalProps.github}</h3>
            </div>
        )
    }
}

export default CVOutputGeneralInfo