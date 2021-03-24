import React, { Component } from "react";

class StepSeven extends Component {
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
    if (this.props.currentStep !== 7) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 7 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label
                htmlFor="fourthCollegeAttendedDescription"
                className="form-label"
              >
                4th College Attended
              </label>
              <input
                className="form-control"
                type="text"
                id="fourthCollegeAttendedDescription"
                name="fourthCollegeAttendedDescription"
                value={this.props.fourthCollegeAttendedDescription}
                onChange={this.props.handleChange}
                placeholder="Description: (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSFourName" className="form-label">
                4th College Name
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSFourName"
                name="afterHSFourName"
                value={this.props.afterHSFourName}
                onChange={this.props.handleChange}
                placeholder="Description: (optional)"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSFourStartMonth"
                className="form-label"
              >
                4th College Start Month
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSFourStartMonth"
                name="afterHSFourStartMonth"
                value={this.props.afterHSFourStartMonth}
                onChange={this.props.handleChange}
                placeholder="Description: Feb"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSFourStartYear"
                className="form-label"
              >
                4th College Start Year
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSFourStartYear"
                name="afterHSFourStartYear"
                value={this.props.afterHSFourStartYear}
                onChange={this.props.handleChange}
                placeholder="Description: (optional)"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSFourEndMonth"
                className="form-label"
              >
                4th College End Month
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSFourEndMonth"
                name="afterHSFourEndMonth"
                value={this.props.afterHSFourEndMonth}
                onChange={this.props.handleChange}
                placeholder="Description: (optional)"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSFourEndYear"
                className="form-label"
              >
                4th College End Year
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSFourEndYear"
                name="afterHSFourEndYear"
                value={this.props.afterHSFourEndYear}
                onChange={this.props.handleChange}
                placeholder="Description: 2020"
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
                    name="afterHSFourAnother"
                    id="yes"
                    value="Yes"
                    checked={this.state.anotherCollege === "true" || this.props.afterHSFourAnother === 'true'}
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
                    name="afterHSFourAnother"
                    id="no"
                    value="No"
                    checked={this.state.anotherCollege === "false" || this.props.afterHSFourAnother === 'false'}
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            {this.state.anotherCollege === "true" ? (
              <p>Go To Section 8 (More Than 4 Schools)</p>
            ) : (
              <p>Go To Section 9 (Any Additional Time After High School)</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default StepSeven;
