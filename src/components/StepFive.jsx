import React, { Component } from "react";

class StepFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anotherCollege: "",
    };
  }

  toggleAnotherCollegeOn = () => {
    this.setState({ anotherCollege: "true" });
  };

  toggleAnotherCollegeOff = () => {
    this.setState({ anotherCollege: "false" });
  };

  render() {
    if (this.props.currentStep !== 5) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 5 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="secondCollegeAttended" className="form-label">
                2nd College Attended
              </label>
              <input
                className="form-control"
                type="text"
                id="secondCollegeAttended"
                name="secondCollegeAttended"
                value={this.props.secondCollegeAttended}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSTwoName" className="form-label">
                What Is The Name Of College 2
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSTwoName"
                name="afterHSTwoName"
                value={this.props.afterHSTwoName}
                onChange={this.props.handleChange}
                placeholder="example: Irvine Community College"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSTwoStartMonth" className="form-label">
                2nd College Start Month
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSTwoStartMonth"
                name="afterHSTwoStartMonth"
                value={this.props.afterHSTwoStartMonth}
                onChange={this.props.handleChange}
                placeholder="example Sep"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSTwoStartYear" className="form-label">
                2nd College Start Year
              </label>
              <p></p>
              <input
                className="form-control"
                type="text"
                id="afterHSTwoStartYear"
                name="afterHSTwoStartYear"
                value={this.props.afterHSTwoStartYear}
                onChange={this.props.handleChange}
                placeholder="example 2016"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSTwoEndMonth" className="form-label">
                2nd College End Month
              </label>
              <p></p>
              <input
                className="form-control"
                type="text"
                id="afterHSTwoEndMonth"
                name="afterHSTwoEndMonth"
                value={this.props.afterHSTwoEndMonth}
                onChange={this.props.handleChange}
                placeholder="example: Dec"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSTwoEndYear" className="form-label">
                2nd College End Year
              </label>
              <p></p>
              <input
                className="form-control"
                type="text"
                id="afterHSTwoEndYear"
                name="afterHSTwoEndYear"
                value={this.props.afterHSTwoEndYear}
                onChange={this.props.handleChange}
                placeholder="example: 2019"
              />
            </div>

            <div className="mb-3">
              <p>
                Have You Attended Another College Besides The Ones You Listed?
              </p>
              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    onChange={this.toggleAnotherCollegeOn}
                    className="form-check-input"
                    type="radio"
                    name="afterHSTwoAnother"
                    id="yes"
                    value="Yes"
                    checked={
                      this.state.anotherCollege === "true" ||
                      this.props.afterHSTwoAnother === "true"
                    }
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    onChange={this.toggleAnotherCollegeOff}
                    className="form-check-input"
                    type="radio"
                    name="afterHSTwoAnother"
                    id="no"
                    value="No"
                    checked={
                      this.state.anotherCollege === "false" ||
                      this.props.afterHSTwoAnother === "false"
                    }
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            {this.state.anotherCollege === "true" ? (
              <p>Go To Section 6 (3rd College Attended) </p>
            ) : (
              <p>Go To Section 9 (Any Additional Time After High School)</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default StepFive;
