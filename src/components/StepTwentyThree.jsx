import React, { Component } from "react";

class StepTwentyThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      another: '',
    };
  }
  toggleAnother = (direction) => {
    if (direction === "on") {
      this.setState({ another: 'true' });
    }
    if (direction === "off") {
      this.setState({ another: 'false' });
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
              <label htmlFor="thirdSport" className="form-label">
                In addition to the previous 2 sports. You have indicated that
                you played in another season of sport in college or an
                additional sport. Which sport did you play?
              </label>
              <select className="form-select" name="thirdSport" value={this.props.thirdSport}>
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
              <label htmlFor="thirdSportCollege" className="form-label">
                From the answer you provided in the previous question. What
                college did you attend when participating in SPORT 3?
              </label>
              <input
                className="form-control"
                type="text"
                id="thirdSportCollege"
                name="thirdSportCollege"
                value={this.props.thirdSportCollege}
                onChange={this.props.handleChange}
                placeholder="Example: Long Beach Community College"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="thirdSportLevel" className="form-label">
                What Level Did You Compete SPORT 3 At?
              </label>
              <select className="form-select" name="thirdSportLevel" value={this.props.thirdSportLevel}>
                <option defaultValue>Open this select menu</option>
                <option value="Varsity (College Level)">
                  Varsity (College Level)
                </option>
                <option value="Club Team">Club Team</option>
                <option value="Redshirt">Redshirt</option>
                <option value="Greyshirt">Greyshirt</option>
                <option value="Junior Varisty">Junior Varisty</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="thirdSportSemester" className="form-label">
                What Semester Did You Compete SPORT 3 In?
              </label>
              <select className="form-select" name="thirdSportSemester" value={this.props.thirdSportSemester}>
                <option defaultValue>Open this select menu</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="thirdSportYear" className="form-label">
                What YEAR did you compete SPORT 3 in?
              </label>
              <input
                className="form-control"
                type="text"
                id="thirdSportYear"
                name="thirdSportYear"
                value={this.props.thirdSportYear}
                onChange={this.props.handleChange}
                placeholder="example: 2019"
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
                    name="thirdSportAnother"
                    id="yes"
                    value="yes"
                    checked={this.props.thirdSportAnother === 'true' || this.state.another === 'true'}
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
                    name="thirdSportAnother"
                    id="no"
                    value="no"
                    checked={this.props.thirdSportAnother === 'false' || this.state.another === 'false'}
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
        {this.state.another === 'true' ? (
          <p>Go to section 24 (4th Sport in College)</p>
        ) : (
          <p>Go to section 25 (Authorize Use Likeness)</p>
        )}
      </div>
    );
  }
}

export default StepTwentyThree;
