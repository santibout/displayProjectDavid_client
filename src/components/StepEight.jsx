import React, { Component } from "react";

class StepEight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 8) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 8 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label
                htmlFor="fourthCollegeAttendedDescription"
                className="form-label"
              >
                More Than 4 Schools
              </label>
              <p>
                After comppleting the remaining questions, please contact tghe
                Athletic Department to address the remainder of the schools you
                attended.
              </p>
              <p>After Section 8 Go To Section 9 (Any Additional Time after High School)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepEight;
