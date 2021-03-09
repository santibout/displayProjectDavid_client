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
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fourthCollegeName" className="form-label">
                4th College Name
              </label>
              <input
                className="form-control"
                type="text"
                id="fourthCollegeName"
                name="fourthCollegeName"
                value={this.props.fourthCollegeName}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="fourthCollegeStartMonthYear"
                className="form-label"
              >
                4th College Start Month And Year
              </label>
              <input
                className="form-control"
                type="text"
                id="fourthCollegeStartMonthYear"
                name="fourthCollegeStartMonthYear"
                value={this.props.fourthCollegeStartMonthYear}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="fourthCollegeStopMonthYear"
                className="form-label"
              >
                4th College STOP Month And Year
              </label>
              <input
                className="form-control"
                type="text"
                id="fourthCollegeStopMonthYear"
                name="fourthCollegeStopMonthYear"
                value={this.props.fourthCollegeStopMonthYear}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
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
                    name="hasAttendedAnotherCollege4"
                    id="yes"
                    value="Yes"
                    checked={this.state.anotherCollege === "true"}
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
                    name="hasAttendedAnotherCollege4"
                    id="no"
                    value="No"
                    checked={this.state.anotherCollege === "false"}
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
