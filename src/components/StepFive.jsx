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
              <label
                htmlFor="secondCollegeStartMonthYear"
                className="form-label"
              >
                2nd College Start Month And Year
              </label>
              <input
                className="form-control"
                type="text"
                id="secondCollegeStartMonthYear"
                name="secondCollegeStartMonthYear"
                value={this.props.secondCollegeStartMonthYear}
                onChange={this.props.handleChange}
                placeholder="example June 2020"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="secondCollegeStopMonthYear"
                className="form-label"
              >
                2nd College STOP Month And Year
              </label>
              <p>
                <small>
                  IE: December 2019 or if you are still attending put "Present"
                </small>
              </p>
              <input
                className="form-control"
                type="text"
                id="secondCollegeStopMonthYear"
                name="secondCollegeStopMonthYear"
                value={this.props.secondCollegeStopMonthYear}
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
                    onChange={this.toggleAnotherCollegeOn}
                    className="form-check-input"
                    type="radio"
                    name="hasAttendedAnotherCollege2"
                    id="yes"
                    value="Yes"
                    checked={this.state.anotherCollege === 'true'}
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
                    checked={this.state.anotherCollege === 'false'}
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            {this.state.anotherCollege === 'true' ? (
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
