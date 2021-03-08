import React, { Component } from "react";

class StepSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anotherCollege: false,
    };
  }

  toggleAnotherCollegeOn = () => {
    this.setState({ anotherCollege: true });
  };

  toggleAnotherCollegeOff = () => {
    this.setState({ anotherCollege: false });
  };

  render() {
    if (this.props.currentStep !== 6) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 6 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="thirdCollegeAttendedDescription" className="form-label">
                3rd College Attended
              </label>
              <input
                className="form-control"
                type="text"
                id="thirdCollegeAttendedDescription"
                name="thirdCollegeAttendedDescription"
                value={this.props.thirdCollegeAttendedDescription}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="thirdCollegeName" className="form-label">
                3rd College Name
              </label>
              <input
                className="form-control"
                type="text"
                id="thirdCollegeName"
                name="thirdCollegeName"
                value={this.props.thirdCollegeName}
                onChange={this.props.handleChange}
                placeholder="example Irvine Community College"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="thirdCollegeStartMonthYear"
                className="form-label"
              >
                3rd College Start Month And Year
              </label>
              <input
                className="form-control"
                type="text"
                id="thirdCollegeStartMonthYear"
                name="thirdCollegeStartMonthYear"
                value={this.props.thirdCollegeStartMonthYear}
                onChange={this.props.handleChange}
                placeholder="example June 2020"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="thirdCollegeStopMonthYear"
                className="form-label"
              >
                3rd College STOP Month And Year
              </label>
              <input
                className="form-control"
                type="text"
                id="thirdCollegeStopMonthYear"
                name="thirdCollegeStopMonthYear"
                value={this.props.thirdCollegeStopMonthYear}
                onChange={this.props.handleChange}
                placeholder="example July 2020"
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
                    onClick={this.toggleAnotherCollegeOn}
                    className="form-check-input"
                    type="radio"
                    name="hasAttendedAnotherCollege3"
                    id="yes"
                    value="Yes"
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    onClick={this.toggleAnotherCollegeOff}
                    className="form-check-input"
                    type="radio"
                    name="hasAttendedAnotherCollege3"
                    id="no"
                    value="No"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            {this.state.anotherCollege ? (
              <p>Go To Next Section </p>
            ) : (
              <p>Go To Section 9 (Any Additional Time After High School)</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default StepSix;
