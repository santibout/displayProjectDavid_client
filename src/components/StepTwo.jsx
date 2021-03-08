import React, { Component } from "react";

class StepTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 2 of 26</h3>
        {/* <p className="section-p">Current Community College Information</p> */}
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="communityCollegeInfo" className="form-label">
                Current Community College Information
              </label>
              <input
                className="form-control"
                type="text"
                id="communityCollegeInfo"
                name="communityCollegeInfo"
                value={this.props.communityCollegeInfo}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="communityCollege" className="form-label">
                Current Community College
              </label>
              <input
                className="form-control"
                type="text"
                id="communityCollege"
                name="communityCollege"
                value={this.props.communityCollege}
                onChange={this.props.handleChange}
                placeholder="Golden West College"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="sport" className="form-label">
                Sport
              </label>
              <select className="form-select" name="sport">
                <option defaultValue>Open this select menu</option>
                <option value="Men's Baseball">Men's Baseball</option>
                <option value="Men's Basketball">Men's Basketball</option>
                <option value="Men's Cross Country">Men's Cross Country</option>
                <option value="Men's Football">Men's Football</option>
                <option value="Men's Soccer">Men's Soccer</option>
                <option value="Men's Swimming And Diving">
                  Men's Swimming And Diving
                </option>
                <option value="Men's Track And Field">
                  Men's Track And Field
                </option>
                <option value="Men's Volleyball">Men's Volleyball</option>
                <option value="Men's Water Polo">Men's Water Polo</option>
                <option value="Woman's Basketball">Women's Basketball</option>
                <option value="Woman's Beach Volleyball">
                  Women's Beach Volleyball
                </option>
                <option value="Woman's Cross Country">
                  Women's Cross Country
                </option>
                <option value="Woman's Soccer">Women's Soccer</option>
                <option value="Woman's Softball">Women's Softball</option>
                <option value="Woman's Swimming And Diving">
                  Women's Swimming And Diving
                </option>
                <option value="Woman's Track And Field">
                  Women's Track And Field
                </option>
                <option value="Woman's Volleyball">Women's Volleyball</option>
                <option value="Woman's Water Polo">Women's Water Polo</option>
              </select>
            </div>

            <div className="mb-3">
              <p>Athletic Conference</p>
              <p className="p-small">
                All Sport Offerings are hosted in the Orange Empire Conference
                (OEC), except Men's Football which is hosted in the Southern
                California Football Association (SCFA)
              </p>
              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="athleticConference"
                    id="oec"
                    value="Orange Empire Conference (OEC)"
                  />
                  <label className="form-check-label" htmlFor="oec">
                    Orange Empire Conference (OEC)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="athleticConference"
                    id="scfa"
                    value="Southern California Football Association (SCFA)"
                  />
                  <label className="form-check-label" htmlFor="scfa">
                    Southern California Football Association (SCFA)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>After Section 2 Continue To Next Section</p>
      </div>
    );
  }
}

export default StepTwo;
