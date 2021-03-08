import React, { Component } from "react";

class StepTwentyThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      another: false,
    };
  }
  toggleAnother = (direction) => {
    if (direction === "on") {
      this.setState({ another: true });
    }
    if (direction === "off") {
      this.setState({ another: false });
    }
  };
  render() {
    if (this.props.currentStep !== 23) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 23 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="sportDescription3" className="form-label">
                3rd Sport in College
              </label>
              <input
                className="form-control"
                type="text"
                id="sportDescription3"
                name="sportDescription3"
                value={this.props.sportDescription3}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="sport3" className="form-label">
                In addition to the previous 2 sports. You have indicated that
                you played in another season of sport in college or an
                additional sport. Which sport did you play?
              </label>
              <select className="form-select" name="sport3">
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

            <div className="mb-3">
              <label htmlFor="sport3College" className="form-label">
                From the answer you provided in the previous question. What
                college did you attend when participating in SPORT 3?
                <p>
                  <small>For Example: Long Beach State</small>
                </p>
              </label>
              <input
                className="form-control"
                type="text"
                id="sport3College"
                name="sport3College"
                value={this.props.sport3College}
                onChange={this.props.handleChange}
                placeholder="Short Answer Text"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="sportLevel3" className="form-label">
                What Level Did You Compete SPORT 3 At?
              </label>
              <select className="form-select" name="sportLevel3">
                <option defaultValue>Open this select menu</option>
                <option value="Varsity (College Level)">
                  Varsity(College Level)
                </option>
                <option value="Club Team">Club Team</option>
                <option value="Redshirt">Redshirt</option>
                <option value="Greyshirt">Greyshirt</option>
                <option value="Junior Varisty">Junior Varisty</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="sport3Semester" className="form-label">
                What Semester Did You Compete SPORT 3 In?
              </label>
              <select className="form-select" name="sport3Semester">
                <option defaultValue>Open this select menu</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="sport3Year" className="form-label">
                What YEAR did you compete SPORT 3 in?
              </label>
              <input
                className="form-control"
                type="text"
                id="sport3Year"
                name="sport3Year"
                value={this.props.sport3Year}
                onChange={this.props.handleChange}
                placeholder="Short answer text"
              />
            </div>

            <div className="mb-3">
              <p>
                Did you play another sport in college besides the 3 you have
                already mentioned?
              </p>
              <div
                className="d-flex justify-content-start"
                onChange={this.props.handleChange}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="anotherSport3"
                    id="yes"
                    value="yes"
                    onClick={() => this.toggleAnother("on")}
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="anotherSport3"
                    id="no"
                    value="no"
                    onClick={() => this.toggleAnother("off")}
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.another ? (
          <p>Go to section 24 (4th Sport in College)</p>
        ) : (
          <p>Go to section 25 (Authorize Use Likeness)</p>
        )}
      </div>
    );
  }
}

export default StepTwentyThree;
