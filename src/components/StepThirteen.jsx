import React, { Component } from "react";

class StepThirteen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 13) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 13 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="armedForces" className="form-label">
                Armed Forces
              </label>
              <input
                className="form-control"
                type="text"
                id="armedForces"
                name="armedForces"
                value={this.props.armedForces}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="armedForcesDate" className="form-label">
                If you were in a branch of the Armed Forces we need to account
                for the time in which you did not attend any post high school
                education and you do not have any record of having employment.
              </label>
              <input
                className="form-control"
                type="text"
                id="armedForcesDate"
                name="armedForcesDate"
                value={this.props.armedForcesDate}
                onChange={this.props.handleChange}
                placeholder="NEED MONTH AND YEAR   For example:  June 2019   TO    Dec 2019"
              />
            </div>
          </div>
        </div>
        <p>
          After Section 13 Go To Section 15 (Counting For Lapse In Time Part 2)
        </p>
      </div>
    );
  }
}

export default StepThirteen;
