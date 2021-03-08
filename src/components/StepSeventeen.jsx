import React, { Component } from "react";

class StepSeventeen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 17) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 17 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="unemployed2" className="form-label">
                Unemployed
              </label>
              <input
                className="form-control"
                type="text"
                id="unemployed2"
                name="unemployed2"
                value={this.props.unemployed2}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="unemployedDate2" className="form-label">
                If You Were Unemployed We Need To Account For The Time In Which
                You Did Not Attent Any Post High School Education And You Do Not
                Have Any Record Of Having Employment.
                <div>
                  <small>NEED MONTH AND YEAR ex... June 2019 TO Dec 2019</small>
                </div>
              </label>
              <input
                className="form-control"
                type="text"
                id="unemployedDate2"
                name="unemployedDate2"
                value={this.props.unemployedDate2}
                onChange={this.props.handleChange}
                placeholder="Short Answer Text"
              />
            </div>
            <p>After Section 17 Go To Section 20 (College Sports)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StepSeventeen;
