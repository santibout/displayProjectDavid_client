import React, { Component } from "react";

class StepTwenty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentStep !== 20) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 20 of 26</h3>
        {/* <p className="section-p">Current Community College Information</p> */}
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="sportDescription2" className="form-label">
                College Sports
              </label>
              <input
                className="form-control"
                type="text"
                id="sportDescription2"
                name="sportDescription2"
                value={this.props.sportDescription2}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="sport2" className="form-label">
                Sport
              </label>
              <select className="form-select" name="sport2">
                <option defaultValue>Open this select menu</option>
                <option value="Men's Badminton">Men's Badminton</option>
                <option value="Men's Baseball">Men's Baseball</option>
                <option value="Men's Basketball">Men's Basketball</option>
                <option value="Men's Cross Country">Men's Cross Country</option>
                <option value="Men's Football">Men's Football</option>
                <option value="Men's Golf">Men's Golf</option>
                <option value="Men's Soccer">Men's Soccer</option>
                <option value="Men's Swimming And Diving">
                  Men's Swimming And Diving
                </option>
                <option value="Men's Tennis">Men's Tennis</option>
                <option value="Men's Track And Field">
                  Men's Track And Field
                </option>
                <option value="Men's Volleyball">Men's Volleyball</option>
                <option value="Men's Water Polo">Men's Water Polo</option>
                <option value="Men's Wrestling">Men's Wrestling</option>
                <option value="Woman's Badminton">Woman's Badminton</option>
                <option value="Woman's Basketball">Women's Basketball</option>
                <option value="Woman's Beach Volleyball">
                  Women's Beach Volleyball
                </option>
                <option value="Woman's Cross Country">
                  Women's Cross Country
                </option>
                <option value="Woman's Golf">Women's Golf</option>
                <option value="Woman's Soccer">Women's Soccer</option>
                <option value="Woman's Softball">Women's Softball</option>
                <option value="Woman's Swimming And Diving">
                  Women's Swimming And Diving
                </option>
                <option value="Woman's Track And Field">
                  Women's Track And Field
                </option>
                <option value="Woman's Tennis">Women's Tennis</option>
                <option value="Woman's Volleyball">Women's Volleyball</option>
                <option value="Woman's Water Polo">Women's Water Polo</option>
                <option value="Woman's Wrestling">Women's Wrestling</option>
              </select>
            </div>
          </div>
        </div>
        <p>After Section 20 Continue To Next Section</p>
      </div>
    );
  }
}

export default StepTwenty;
