import React, { Component } from "react";

class StepEleven extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 11) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 11 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="employed" className="form-label">
                Description (optional)
              </label>
              <input
                className="form-control"
                type="text"
                id="employed"
                name="employed"
                value={this.props.employed}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="employerCityState" className="form-label">
                Please List Your Employer, City, State
              </label>
              <input
                className="form-control"
                type="text"
                id="employerCityState"
                name="employerCityState"
                value={this.props.employerCityState}
                onChange={this.props.handleChange}
                placeholder="IE Best Buy Huntington Beach, CA"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="employmentDate" className="form-label">
                Employment Date
              </label>
              <input
                className="form-control"
                type="text"
                id="employmentDate"
                name="employmentDate"
                value={this.props.employmentDate}
                onChange={this.props.handleChange}
                placeholder="NEED MONTH AND YEAR   For example:  June 2019   TO    Dec 2019"
              />
            </div>
          </div>
        </div>
        <p>
          After Section 11 Go To Section 15 (Counting For Lapse In Time Part 2)
        </p>
      </div>
    );
  }
}

export default StepEleven;
