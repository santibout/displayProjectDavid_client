import React, { Component } from "react";

class StepFour extends Component {
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
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 4 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="afterHSOneInfo" className="form-label">
                Accounting For Time After High School
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSOneInfo"
                name="afterHSOneInfo"
                value={this.props.afterHSOneInfo}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSOneName" className="form-label">
                List The Community College You Were Currently At
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSOneName"
                name="afterHSOneName"
                value={this.props.afterHSOneName}
                onChange={this.props.handleChange}
                placeholder="example: Irvine Community College"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSOneStartMonth"
                className="form-label"
              >
                What Is The Month You Started At This College?
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSOneStartMonth"
                name="afterHSOneStartMonth"
                value={this.props.afterHSOneStartMonth}
                onChange={this.props.handleChange}
                placeholder="example: August"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSOneStartYear"
                className="form-label"
              >
                What Is The Year You Started At This College?
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSOneStartYear"
                name="afterHSOneStartYear"
                value={this.props.afterHSOneStartYear}
                onChange={this.props.handleChange}
                placeholder="example: 2019"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSOneEndMonth"
                className="form-label"
              >
                What Is The Month You Left This College?
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSOneEndMonth"
                name="afterHSOneEndMonth"
                value={this.props.afterHSOneEndMonth}
                onChange={this.props.handleChange}
                placeholder="example: Aug"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSOneEndYear"
                className="form-label"
              >
                What Is The Year You Left This College?
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSOneEndYear"
                name="afterHSOneEndYear"
                value={this.props.afterHSOneEndYear}
                onChange={this.props.handleChange}
                placeholder="example: 2019"
              />
            </div>

            <div className="mb-3">
              <label>
                Have You Attended Another College Besides The One You Listed?
              </label>
              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    onChange={this.toggleAnotherCollegeOn}
                    className="form-check-input"
                    type="radio"
                    name="afterHSOneAnother"
                    id="yes"
                    value="Yes"
                    checked={
                      this.state.anotherCollege === "true" ||
                      this.props.afterHSOneAnother === 'true'
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
                    name="afterHSOneAnother"
                    id="no"
                    value="No"
                    checked={
                      this.state.anotherCollege === "false" ||
                      this.props.afterHSOneAnother === 'false'
                    }
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {this.state.anotherCollege === "true" ? (
            <p>After Section 4 Go To Section 5 (2nd College Attended) </p>
          ) : (
            <p>
              After Section 4 Go To Section 9 (Any Additional Time After High
              School)
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default StepFour;
