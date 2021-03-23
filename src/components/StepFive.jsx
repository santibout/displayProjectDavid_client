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
              <label htmlFor="secondCollegeName" className="form-label">
                What Is The Name Of College 2
              </label>
              <input
                className="form-control"
                type="text"
                id="secondCollegeName"
                name="secondCollegeName"
                value={this.props.secondCollegeName}
                onChange={this.props.handleChange}
                placeholder="example Irvine Community College"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="secondCollegeStartMonth" className="form-label">
                2nd College Start Month
              </label>
              <input
                className="form-control"
                type="text"
                id="secondCollegeStartMonth"
                name="secondCollegeStartMonth"
                value={this.props.secondCollegeStartMonth}
                onChange={this.props.handleChange}
                placeholder="example Sep"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="secondCollegeStopYear" className="form-label">
                2nd College Start Year
              </label>
              <p></p>
              <input
                className="form-control"
                type="text"
                id="secondCollegeStartYear"
                name="secondCollegeStartYear"
                value={this.props.secondCollegeStartYear}
                onChange={this.props.handleChange}
                placeholder="example 2016"
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
                    name="hasAttendedAnotherCollege2"
                    id="yes"
                    value="Yes"
                    checked={
                      this.state.anotherCollege === "true" ||
                      this.props.hasAttendedAnotherCollege2 === "true"
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
                    name="hasAttendedAnotherCollege2"
                    id="no"
                    value="No"
                    checked={
                      this.state.anotherCollege === "false" ||
                      this.props.hasAttendedAnotherCollege2 === "false"
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
