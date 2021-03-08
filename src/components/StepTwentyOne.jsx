import React, { Component } from "react";

class StepTwentyOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 21) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 21 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label
                htmlFor="collegeAthleticParticipation"
                className="form-label"
              >
                Previous College Athletic Participation
              </label>
              <input
                className="form-control"
                type="text"
                id="collegeAthleticParticipation"
                name="collegeAthleticParticipation"
                value={this.props.collegeAthleticParticipation}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <p>Have yoou previously played on an Athletic Team in College</p>
              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="everPlayedOnAthleticTeamInCollege"
                    id="yes"
                    value="yes"
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="everPlayedOnAthleticTeamInCollege"
                    id="no"
                    value="no"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <p>After Section 21 Continue To Next Section</p>
        </div>
      </div>
    );
  }
}

export default StepTwentyOne;
