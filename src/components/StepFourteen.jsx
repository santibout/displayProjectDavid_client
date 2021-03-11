import React, { Component } from "react";

class StepFourteen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 14) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 14 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="other" className="form-label">
                Other
              </label>
              <input
                className="form-control"
                type="text"
                id="other"
                name="other"
                value={this.props.other}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="otherDescription" className="form-label">
                Please Describe Your Situation Below
              </label>
              <input
                className="form-control"
                type="text"
                id="otherDescription"
                name="otherDescription"
                value={this.props.otherDescription}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="otherDate" className="form-label">
                Need to account for time for your situation above
              </label>
              <input
                className="form-control"
                type="text"
                id="otherDate"
                name="otherDate"
                value={this.props.otherDate}
                onChange={this.props.handleChange}
                placeholder="NEED MONTH AND YEAR   For example:  June 2019   TO    Dec 2019"
              />
            </div>
          </div>
        </div>
        <p>
          After Section 14 Go To Section 15 (Counting For Lapse In Time Part 2)
        </p>
      </div>
    );
  }
}

export default StepFourteen;
