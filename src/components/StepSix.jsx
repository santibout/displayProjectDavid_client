import React, { Component } from "react";

class StepSix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anotherCollege: '',
    };
  }

  toggleAnotherCollegeOn = () => {
    this.setState({ anotherCollege: 'true' });
  };

  toggleAnotherCollegeOff = () => {
    this.setState({ anotherCollege: 'false' });
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
              <label
                htmlFor="thirdCollegeAttendedDescription"
                className="form-label"
              >
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
              <label htmlFor="afterHSThreeName" className="form-label">
                What Is The Name Of College 3
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSThreeName"
                name="afterHSThreeName"
                value={this.props.afterHSThreeName}
                onChange={this.props.handleChange}
                placeholder="example: Irvine Community College"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="afterHSThreeStartMonth"
                className="form-label"
              >
                What Is The Month You Started At College 3
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSThreeStartMonth"
                name="afterHSThreeStartMonth"
                value={this.props.afterHSThreeStartMonth}
                onChange={this.props.handleChange}
                placeholder="example: June"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSThreeStartYear" className="formtartbel">
                What Is The Year You Started At College 3
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSThreeStartYear"
                name="afterHSThreeStartYear"
                value={this.props.afterHSThreeStartYear}
                onChange={this.props.handleChange}
                placeholder="example: 2020"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSThreeEndMonth" className="formtartbel">
                What Is The Year You Month College 3
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSThreeEndMonth"
                name="afterHSThreeEndMonth"
                value={this.props.afterHSThreeEndMonth}
                onChange={this.props.handleChange}
                placeholder="example: August"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="afterHSThreeEndYear" className="formtartbel">
                What Is The Year You Left College 3
              </label>
              <input
                className="form-control"
                type="text"
                id="afterHSThreeEndYear"
                name="afterHSThreeEndYear"
                value={this.props.afterHSThreeEndYear}
                onChange={this.props.handleChange}
                placeholder="example: 2020"
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
                    name="afterHSThreeAnother"
                    id="yes"
                    value="Yes"
                    checked={this.state.anotherCollege === 'true' || this.props.afterHSThreeAnother === 'true'}
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
                    name="afterHSThreeAnother"
                    id="no"
                    value="No"
                    checked={this.state.anotherCollege === 'false' || this.props.afterHSThreeAnother === 'false'}
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            {this.state.anotherCollege === 'true' ? (
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
