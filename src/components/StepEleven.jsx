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
                Employed
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
              <label htmlFor="employmentStartMonth" className="form-label">
                Employment Start Month
              </label>
              <input
                className="form-control"
                type="text"
                id="employmentStartMonth"
                name="employmentStartMonth"
                value={this.props.employmentStartMonth}
                onChange={this.props.handleChange}
                placeholder="example: Jan"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="employmentStartYear" className="form-label">
                Employment Start Year
              </label>
              <input
                className="form-control"
                type="text"
                id="employmentStartYear"
                name="employmentStartYear"
                value={this.props.employmentStartYear}
                onChange={this.props.handleChange}
                placeholder="example: 2020"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="employmentEndMonth" className="form-label">
                Employment End Month
              </label>
              <input
                className="form-control"
                type="text"
                id="employmentEndMonth"
                name="employmentEndMonth"
                value={this.props.employmentEndMonth}
                onChange={this.props.handleChange}
                placeholder="example: Dec"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="employmentEndYear" className="form-label">
                Employment End Year
              </label>
              <input
                className="form-control"
                type="text"
                id="employmentEndYear"
                name="employmentEndYear"
                value={this.props.employmentEndYear}
                onChange={this.props.handleChange}
                placeholder="example: 2021"
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
