import React, { Component } from "react";

class StepOne extends Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="container">
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
              />
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
              // value={this.props.formDescription}
              onChange={this.props.handleChange}
              placeholder="Form Description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name(First, Middle Initial, Last)
            </label>
            <input
              className="form-control"
              type="fullName"
              id="fullName"
              name="fullName"
              value={this.props.fullName}
              onChange={this.props.handleChange}
              placeholder="John A. Doe"
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
                  seleted={this.props.gender}
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
                  seletedg
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
            placeholder="1234 Athletic Way"
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
            // value={this.props.formDescription}
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
