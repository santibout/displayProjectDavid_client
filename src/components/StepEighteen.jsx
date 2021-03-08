import React, { Component } from "react";

class StepEighteen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 18) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 18 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="armedForces2" className="form-label">
                Armed Forces
              </label>
              <input
                className="form-control"
                type="text"
                id="armedForces2"
                name="armedForces2"
                value={this.props.armedForces2}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="armedForcesDate2" className="form-label">
                If you were in a branch of the Armed Forces we need to account
                for the time in which you did not attend any post high school
                education and you do not have any record of having employment.
                <div>
                  <small>NEED MONTH AND YEAR ex... June 2019 TO Dec 2019</small>
                </div>
              </label>
              <input
                className="form-control"
                type="text"
                id="armedForcesDate2"
                name="armedForcesDate2"
                value={this.props.armedForcesDate2}
                onChange={this.props.handleChange}
                placeholder="Short Answer Text"
              />
            </div>
            <p>After Section 18 Go To Section 20 (College Sports)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StepEighteen;
