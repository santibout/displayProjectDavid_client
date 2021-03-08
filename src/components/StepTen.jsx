import React, { Component } from "react";

class StepTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isYes: false,
      reason: 1,
    };
  }
  changeReason = (e) => {
    console.log("changing reason: ", e.target.value);
    this.setState({ reason: e.target.value });
  };
  render() {
    if (this.props.currentStep !== 10) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 10 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="laspseOfTimeIn" className="form-label">
                Continue For Lapse In Time In
              </label>
              <input
                className="form-control"
                type="text"
                id="laspseOfTimeIn"
                name="laspseOfTimeIn"
                value={this.props.laspseOfTimeIn}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="laspseOfTimeIn" className="form-label">
                Since you selected Yes to taking time off from school. We need
                to account for your break in time. Please select from a drop
                down below.
              </label>
              <select
                className="form-select"
                name="timeOffOfSchoolReason"
                id="timeOfOfSchoolReason"
                onChange={this.changeReason}
              >
                <option defaultValue>Please Select An Option</option>
                <option value="I Was Employed">I Was Employed</option>
                <option value="I was unemployed (Did not work and did not attend school)">
                  I was unemployed (Did not work and did not attend school)
                </option>
                <option value="I Was In The Armed Forces">
                  I Was In The Armed Forces
                </option>
                <option value="Other">Other</option>
              </select>

              {this.state.reason == 1 && (
                <p>After Section 10 Continue To Next Step</p>
              )}
              {this.state.reason === 'I Was Employed' && <p>Go To Section 11 (Employed)</p>}
              {this.state.reason === 'I was unemployed (Did not work and did not attend school)' && <p>Go To Section 12 (Unemployed)</p>}
              {this.state.reason === 'I Was In The Armed Forces' && <p>Go To Section 13 (Armed Forces)</p>}
              {this.state.reason === 'Other' && <p>Go To Section 14 (Other)</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepTen;
