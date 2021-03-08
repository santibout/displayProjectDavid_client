import React, { Component } from "react";

class StepNineteen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 19) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 19 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="other2" className="form-label">
                Other
              </label>
              <input
                className="form-control"
                type="text"
                id="other2"
                name="other2"
                value={this.props.other2}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="otherDescription2" className="form-label">
               Please describe your situation below
              </label>
              <input
                className="form-control"
                type="text"
                id="otherDescription2"
                name="otherDescription2"
                value={this.props.otherDescription2}
                onChange={this.props.handleChange}
                placeholder="Short Answer Text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="otherDate2" className="form-label">
               Need to account for time for your situation above
               <div>
                   <small>NED MONTH AND YEAR ex... June 2019 TO Dec 2019</small>
               </div>
              </label>
              <input
                className="form-control"
                type="text"
                id="otherDate2"
                name="otherDate2"
                value={this.props.otherDate2}
                onChange={this.props.handleChange}
                placeholder="Short Answer Text"
              />
            </div>
            <p>After Section 19 Go To Section 20 (College Sports)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StepNineteen;
