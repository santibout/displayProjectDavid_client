import React, { Component } from "react";

class StepFifteen extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  changeReason = (e) => {
    console.log("changing reason: ", e.target.value);
    this.setState({ reason: e.target.value });
  };
  render() {
    if (this.props.currentStep !== 15) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 15 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="laspseOfTimeIn2" className="form-label">
                Continue For Lapse In Time (Part 2)
              </label>
              <input
                className="form-control"
                type="text"
                id="laspseOfTimeIn2"
                name="laspseOfTimeIn2"
                value={this.props.laspseOfTimeIn2}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="laspseOfTimeIn2Option" className="form-label">
                Is There Any Additional Time That Needs To Be Accounted For?
              </label>
              <select
                className="form-select"
                name="laspseOfTimeIn2Option"
                id="laspseOfTimeIn2Option"
                onChange={this.changeReason}
              >
                <option defaultValue>Please Select An Option</option>
                <option value="No More Time Needs To Be Accounted For">
                  No More Time Needs To Be Accounted For
                </option>
                <option value="I Was Employed">I Was Employed</option>
                <option value="I was unemployed (Did not work and did not attend school)">
                  I was unemployed (Did not work and did not attend school)
                </option>
                <option value="I Was In The Armed Forces">
                  I was in the armed forces
                </option>
                <option value="Other">Other</option>
              </select>

              {this.state.reason == 1 && (
                <p>After Section 15 Continue To Next Step</p>
              )}
              {this.state.reason ==
                "No More Time Needs To Be Accounted For" && (
                <p>Go To Section 20 (College Sports)</p>
              )}
              {this.state.reason === "I Was Employed" && (
                <p>Go To Section 11 (Employed)</p>
              )}
              {this.state.reason ===
                "I was unemployed (Did not work and did not attend school)" && (
                <p>Go To Section 12 (Unemployed)</p>
              )}
              {this.state.reason === "I Was In The Armed Forces" && (
                <p>Go To Section 13 (Armed Forces)</p>
              )}
              {this.state.reason === "Other" && <p>Go To Section 14 (Other)</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFifteen;
