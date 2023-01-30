import React, { Component } from "react";

class CVOutputGeneralInfo extends Component {

    render() {
        const {infoProps} = this.props;

        return (
            <div>
                <h3>{infoProps.name}</h3>
                <h3>{infoProps.email}</h3>
                <h3>{infoProps.mobile}</h3>
            </div>
        )
    }
}

export default CVOutputGeneralInfo