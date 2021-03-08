import React, { Component } from "react";

class StepTwentyFive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 25) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 25 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="authorize" className="form-label">
                Authorize Use Likeness
              </label>
              <input
                className="form-control"
                type="text"
                id="authorize"
                name="authorize"
                value={this.props.authorize}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="initials" className="form-label">
                My initials authorize the use and publication of my likeness by
                the CCCAA and its member institutions:
                <p>
                  <small>
                    Please type your initials below acknowledging the statement
                    above.
                  </small>
                </p>
              </label>
              <input
                className="form-control"
                type="text"
                id="initials"
                name="initials"
                value={this.props.initials}
                onChange={this.props.handleChange}
                placeholder="Short answer text"
              />
            </div>
          </div>
        </div>
        <p>After Section 25 Continue To The Next Section</p>
      </div>
    );
  }
}

export default StepTwentyFive;
