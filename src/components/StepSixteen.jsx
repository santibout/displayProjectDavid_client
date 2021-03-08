import React, { Component } from "react";

class StepSixteen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 16) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 16 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="employed2" className="form-label">
                Employed
              </label>
              <input
                className="form-control"
                type="text"
                id="employed2"
                name="employed2"
                value={this.props.employed2}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="employerCityState2" className="form-label">
                Please List Your Employer, City And State
              </label>
              <input
                className="form-control"
                type="text"
                id="employerCityState2"
                name="employerCityState2"
                value={this.props.employerCityState2}
                onChange={this.props.handleChange}
                placeholder="IE: Best Buy, Huntington Beach, CA"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="employmentDate2" className="form-label">
                What Were The DATES You Were Employed With The Company?
                <div>
                  <small>
                    NEED MONTH AND YEAR: EX... June 2019 TO Dec 2019
                  </small>
                </div>
              </label>
              <input
                className="form-control"
                type="text"
                id="employmentDate2"
                name="employmentDate2"
                value={this.props.employmentDate2}
                onChange={this.props.handleChange}
                placeholder="Short Answer Text"
              />
            </div>
            <p>After Section 16 Go To Section 20 (College Sports)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StepSixteen;
