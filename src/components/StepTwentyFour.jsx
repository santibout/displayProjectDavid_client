import React, { Component } from "react";

class StepTwentyFour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 24) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 24 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="sportDescription4" className="form-label">
                4th Sport in College
              </label>
              <input
                className="form-control"
                type="text"
                id="sportDescription4"
                name="sportDescription4"
                value={this.props.sportDescription4}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="fourthSport" className="form-label">
                In addition to the previous 3 sports. You have indicated that
                you played in another season of sport in college or an
                additional sport. Which sport did you play?
              </label>
              <select className="form-select" name="fourthSport" value={this.props.fourthSport}>
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
                <option value="Women's Badminton">Woman's Badminton</option>
                <option value="Women's Basketball">Women's Basketball</option>
                <option value="Women's Beach Volleyball">
                  Women's Beach Volleyball
                </option>
                <option value="Women's Cross Country">
                  Women's Cross Country
                </option>
                <option value="Women's Golf">Women's Golf</option>
                <option value="Women's Soccer">Women's Soccer</option>
                <option value="Women's Softball">Women's Softball</option>
                <option value="Women's Swimming And Diving">
                  Women's Swimming And Diving
                </option>
                <option value="Women's Track And Field">
                  Women's Track And Field
                </option>
                <option value="Women's Tennis">Women's Tennis</option>
                <option value="Women's Volleyball">Women's Volleyball</option>
                <option value="Women's Water Polo">Women's Water Polo</option>
                <option value="Women's Wrestling">Women's Wrestling</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="fourthSportCollege" className="form-label">
                From the answer you provided in the previous question. What
                college did you attend when participating in SPORT 4?
              </label>
              <input
                className="form-control"
                type="text"
                id="fourthSportCollege"
                name="fourthSportCollege"
                value={this.props.fourthSportCollege}
                onChange={this.props.handleChange}
                placeholder="Example: Long Beach Community College"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="fourthSportLevel" className="form-label">
                What Level Did You Compete SPORT 4 At?
              </label>
              <select className="form-select" name="fourthSportLevel" value={this.props.fourthSportLevel}>
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
              <label htmlFor="fourthSportSemester" className="form-label">
                What Semester Did You Compete SPORT 4 In?
              </label>
              <select className="form-select" name="fourthSportSemester" value={this.props.fourthSportSemester}>
                <option defaultValue>Open this select menu</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="fourthSportYear" className="form-label">
                What YEAR did you compete SPORT 4 in?
              </label>
              <input
                className="form-control"
                type="text"
                id="fourthSportYear"
                name="fourthSportYear"
                value={this.props.fourthSportYear}
                onChange={this.props.handleChange}
                placeholder="Short answer text"
              />
            </div>
          </div>
        </div>
        <p>After Section 24 Go To Section 25 (Authorize Use Likeness)</p>
      </div>
    );
  }
}

export default StepTwentyFour;
