import React, { Component } from "react";

class StepTwentyTwo extends Component {
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
    if (this.props.currentStep !== 22) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 22 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="secondSportDescription" className="form-label">
                2nd Sport in College
              </label>
              <input
                className="form-control"
                type="text"
                id="secondSportDescription"
                name="secondSportDescription"
                value={this.props.secondSportDescription}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="secondSport" className="form-label">
                Sport
              </label>
              <select
                className="form-select"
                name="secondSport"
                value={this.props.secondSport}
              >
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
              <label htmlFor="secondSportCollege" className="form-label">
                From the answer you provided in the previous question. What
                college did you attend when participating in SPORT 2?
              </label>
              <input
                className="form-control"
                type="text"
                id="secondSportCollege"
                name="secondSportCollege"
                value={this.props.secondSportCollege}
                onChange={this.props.handleChange}
                placeholder="Example: Long Beach Community College"
              />
            </div>

            <div className="mb-3" onChange={this.props.handleChange}>
              <label htmlFor="secondSportLevel" className="form-label">
                What Level Did You Complete SPORT 2 At?
              </label>
              <select
                className="form-select"
                name="secondSportLevel"
                value={this.props.secondSportLevel}
              >
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
              <label htmlFor="secondSportSemester" className="form-label">
                What Semester Did You Compete SPORT 2 In?
              </label>
              <select
                className="form-select"
                name="secondSportSemester"
                value={this.props.secondSportSemester}
              >
                <option defaultValue>Open this select menu</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="secondSportYear" className="form-label">
                What YEAR did you compete SPORT 2 in?
              </label>
              <input
                className="form-control"
                type="text"
                id="secondSportYear"
                name="secondSportYear"
                value={this.props.secondSportYear}
                onChange={this.props.handleChange}
                placeholder="Short answer text"
              />
            </div>

            <div className="mb-3">
              <p>
                Did you play another sport in college besides the 2 you have
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
                    name="secondSportAnother"
                    id="yes"
                    value="yes"
                    checked={this.props.secondSportAnother === "true" || this.state.another === 'true'}
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
                    name="secondSportAnother"
                    id="no"
                    value="no"
                    checked={this.props.secondSportAnother === "false" || this.state.another === 'false'}
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
          <p>Go to section 23 (3rd Sport in College)</p>
        ) : (
          <p>Go to section 25 (Authorize Use Likeness)</p>
        )}
      </div>
    );
  }
}

export default StepTwentyTwo;
