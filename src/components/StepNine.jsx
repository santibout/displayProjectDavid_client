import React, { Component } from "react";

class StepNine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isYes: false,
    };
  }
  toggleIsYes = () => {
    this.setState({ isYes: true });
  };

  toggleIsYesOff = () => {
    this.setState({ isYes: false });
  };
  render() {
    if (this.props.currentStep !== 9) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 9 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="anyAdditionalTimeAfterHS" className="form-label">
                Any Additional Time After High School
              </label>
              <input
                className="form-control"
                type="text"
                id="anyAdditionalTimeAfterHS"
                name="anyAdditionalTimeAfterHS"
                value={this.props.anyAdditionalTimeAfterHS}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <p>
                Thinking back from Today to when you graduated (or left) high
                school, have you taken any time off from school?
              </p>
              <p>
                Did you work for a semester and not enrolled in college? Did you
                take a break from college?
              </p>
              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    onClick={this.toggleIsYes}
                    className="form-check-input"
                    type="radio"
                    name="takenTimeOffSchool"
                    id="yes"
                    value="Yes"
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    onClick={this.toggleIsYesOff}
                    className="form-check-input"
                    type="radio"
                    name="takenTimeOffSchool"
                    id="no"
                    value="No"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            {this.state.isYes ? (
              <p>Go To Section 10 (Counting For Lapse In Time)</p>
            ) : (
              <p>Go To Section 20 (College Sports)</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default StepNine;
