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
                Unemployed
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
              <label htmlFor="unemploymentStartMonth" className="form-label">
                Unemployment Start Month
              </label>
              <input
                className="form-control"
                type="text"
                id="unemploymentStartMonth"
                name="unemploymentStartMonth"
                value={this.props.unemploymentStartMonth}
                onChange={this.props.handleChange}
                placeholder="example: Jan"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="unemploymentStartYear" className="form-label">
                Unemployment Start Year
              </label>
              <input
                className="form-control"
                type="text"
                id="unemploymentStartYear"
                name="unemploymentStartYear"
                value={this.props.unemploymentStartYear}
                onChange={this.props.handleChange}
                placeholder="example: 2020"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="unemploymentEndMonth" className="form-label">
                Unemployment End Month
              </label>
              <input
                className="form-control"
                type="text"
                id="unemploymentEndMonth"
                name="unemploymentEndMonth"
                value={this.props.unemploymentEndMonth}
                onChange={this.props.handleChange}
                placeholder="example: Dec"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="unemploymentEndYear" className="form-label">
                Unemployment End Year
              </label>
              <input
                className="form-control"
                type="text"
                id="unemploymentEndYear"
                name="unemploymentEndYear"
                value={this.props.unemploymentEndYear}
                onChange={this.props.handleChange}
                placeholder="example: 2021"
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
