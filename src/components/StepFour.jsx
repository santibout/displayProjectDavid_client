import React, { Component } from "react";

class StepFour extends Component {
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
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 4 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="accountForTimesAfterHS" className="form-label">
                Accounting For Time After High School
              </label>
              <input
                className="form-control"
                type="text"
                id="accountForTimesAfterHS"
                name="accountForTimesAfterHS"
                value={this.props.accountForTimesAfterHS}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="previousCommunityCollege" className="form-label">
                List The Community College You Had Attended
              </label>
              <input
                className="form-control"
                type="text"
                id="previousCommunityCollege"
                name="previousCommunityCollege"
                value={this.props.previousCommunityCollege}
                onChange={this.props.handleChange}
                placeholder="example: Irvine Community College"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="previousCommunityCollegeStartMonthYear"
                className="form-label"
              >
                List The Community College You Had Attended
              </label>
              <input
                className="form-control"
                type="text"
                id="previousCommunityCollegeStartMonthYear"
                name="previousCommunityCollegeStartMonthYear"
                value={this.props.previousCommunityCollegeStartMonthYear}
                onChange={this.props.handleChange}
                placeholder="example: August 2019"
              />
            </div>

            <div className="mb-3">
              <p>
                Have You Attended Another College Besides The One You Listed?
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
                    name="hasAttendedAnotherCollege"
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
                    name="hasAttendedAnotherCollege"
                    id="no"
                    value="No"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>

          </div>
          {this.state.anotherCollege ? (
            <p>After Section 4 Go To Section 5 (2nd College Attended) </p>
          ) : (
            <p>After Section 4 Go To Section 9 (Any Additional Time After High School)</p>
          )}
        </div>
      </div>
    );
  }
}

export default StepFour;
