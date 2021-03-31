import React, { Component } from "react";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
    };
  }
  setGender = (x) => {
    this.setState({ gender: x });
  };
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="container needs-validation">
        <h3>Step 1 of 26</h3>

        {/* <p className="section-p">CCCAA Eligibility Form</p> */}
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="eligibility" className="form-label">
                CCCAA Eligibility Form
              </label>
              <input
                className="form-control"
                type="text"
                id="formDescription"
                name="formDescription"
                value={this.props.formDescription}
                onChange={this.props.handleChange}
                placeholder="Form Description"
                required
              />
              <div class="invalid-feedback">Looks good!</div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Todays Date
            </label>
            <input
              className="form-control"
              type="date"
              id="currentDate"
              name="currentDate"
              value={this.props.currentDate}
              onChange={this.props.handleChange}
              placeholder="Form Description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={this.props.email}
              onChange={this.props.handleChange}
              placeholder="example: example@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name(Last, First, Middle Initial)
            </label>
            <input
              className="form-control"
              type="fullName"
              id="fullName"
              name="fullName"
              value={this.props.fullName}
              onChange={this.props.handleChange}
              placeholder="Doe, John V"
            />
          </div>

          <div className="mb-3">
            <p>Gender</p>
            <div
              className="d-flex justify-content-start"
              onChange={this.props.handleChange}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={() => this.setGender("male")}
                  checked={this.props.gender === "male"}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={() => this.setGender("female")}
                  checked={this.props.gender === "female"}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="streetAddress" className="form-label">
            Current Street Address
          </label>
          <input
            className="form-control"
            type="text"
            id="address"
            name="streetAddress"
            value={this.props.address}
            onChange={this.props.handleChange}
            placeholder="1234 Athletic Way"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cityStateZip" className="form-label">
            City, State, ZIP
          </label>
          <input
            className="form-control"
            type="text"
            id="address2"
            name="cityStateZip"
            value={this.props.address2}
            onChange={this.props.handleChange}
            placeholder="Irvine, CA 92528"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            className="form-control"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={this.props.phoneNumber}
            onChange={this.props.handleChange}
            placeholder="555123456"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date Of Birth
          </label>
          <input
            className="form-control"
            type="date"
            id="dob"
            name="dob"
            value={this.props.dob}
            onChange={this.props.handleChange}
            placeholder="Month, Day, Year"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">
            Student ID#
          </label>
          <input
            className="form-control"
            type="text"
            id="studentId"
            name="studentId"
            value={this.props.studentId}
            onChange={this.props.handleChange}
            placeholder="C012345678"
          />
        </div>
        <p>After Section 1 Go to section 5 (2nd College Attended)</p>
      </div>
    );
  }
}

export default StepOne;
