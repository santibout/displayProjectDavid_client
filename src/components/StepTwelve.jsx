import React, { Component } from "react";

class StepTwelve extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 12) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 12 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="unemployed" className="form-label">
                Description (optional)
              </label>
              <input
                className="form-control"
                type="text"
                id="unemployed"
                name="unemployed"
                value={this.props.unemployed}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="unemploymentDate" className="form-label">
                NEED MONTH AND YEAR For example: June 2019 TO Dec 2019
              </label>
              <input
                className="form-control"
                type="text"
                id="unemploymentDate"
                name="unemploymentDate"
                value={this.props.unemploymentDate}
                onChange={this.props.handleChange}
                placeholder="NEED MONTH AND YEAR   For example:  June 2019   TO    Dec 2019"
              />
            </div>

          </div>
        </div>
        <p>
          After Section 12 Go To Section 15 (Counting For Lapse In Time Part 2)
        </p>
      </div>
    );
  }
}

export default StepTwelve;
