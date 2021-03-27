import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import StepSix from "./components/StepSix";
import StepSeven from "./components/StepSeven";
import StepEight from "./components/StepEight";
import StepNine from "./components/StepNine";
import StepTen from "./components/StepTen";
import StepEleven from "./components/StepEleven";
import StepTwelve from "./components/StepTwelve";
import StepThirteen from "./components/StepThirteen";
import StepFourteen from "./components/StepFourteen";
import StepFifteen from "./components/StepFifteen";
import StepSixteen from "./components/StepSixteen";
import StepSeventeen from "./components/StepSeventeen";
import StepEighteen from "./components/StepEighteen";
import StepNineteen from "./components/StepNineteen";
import StepTwenty from "./components/StepTwenty";
import StepTwentyOne from "./components/StepTwentyOne";
import StepTwentyTwo from "./components/StepTwentyTwo";
import StepTwentyThree from "./components/StepTwentyThree";
import StepTwentyFour from "./components/StepTwentyFour";
import StepTwentyFive from "./components/StepTwentyFive";
import StepTwentySix from "./components/StepTwentySix";
import GetData from "./components/GetData";

import axios from "axios";

import cccaaImg from "./static/cccaa.png";
// Use postmark to send email
// then save to google docs
//  look into google sheets api
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      lastStep: 26,
      // Step 1
      formDescription: "",
      currentDate: "",
      fullName: "",
      gender: "",
      streetAddress: "",
      cityStateZip: "",
      phoneNumber: "",
      dob: "",
      studentId: "",
      // Step 2
      communityCollegeInfo: "",
      communityCollege: "",
      sport: "",
      athleticConference: "",
      // Step 3
      highSchoolInfo: "",
      highSchool: "",
      highSchoolCityState: "",
      highSchoolMonthYearGraduation: "",
      // Step 4
      accountForTimesAfterHS: "",
      afterHSOneName: "",
      afterHSOneStartMonth: "",
      afterHSOneStartYear: "",
      afterHSOneEndMonth: "",
      afterHSOneEndYear: "",
      // Step 5
      secondCollegeAttended: "",
      afterHSTwoName: "",
      afterHSTwoStartMonth: "",
      afterHSTwoStartYear: "",
      afterHSTwoEndMonth: "",
      afterHSTwoEndYear: "",
      afterHSTwoAnother: "",
      // Step 6
      thirdCollegeAttendedDescription: "",
      afterHSThreeName: "",
      afterHSThreeStartMonth: "",
      afterHSThreeStartYear: "",
      afterHSThreeEndMonth: "",
      afterHSThreeEndYear: "",
      afterHSThreeAnother: "",
      // Step 7
      fourthCollegeAttendedDescription: "",
      afterHSFourName: "",
      afterHSFourStartMonth: "",
      afterHSFourStartYear: "",
      afterHSFourEndMonth: "",
      afterHSFourEndYear: "",
      afterHSFourAnother: "",
      // Step 9
      anyAdditionalTimeAfterHS: "",
      takenTimeOffSchool: "",
      // Step 10
      laspseOfTimeIn: "",
      timeOffOfSchoolReason: "",
      // Step 11
      employed: "",
      employerCityState: "",
      employmentStartMonth: "",
      employmentStartYear: "",
      employmentEndMonth: "",
      employmentEndYear: "",
      // Step 12
      unemployed: "",
      unemployedStartMonth: "",
      unemployedStartYear: "",
      unemployedEndMonth: "",
      unemployedEndYear: "",
      // Step 13
      armedForces: "",
      armedForcesDate: "",
      // Step 14
      other: "",
      otherDescription: "",
      otherDate: "",
      // Step 15
      laspseOfTimeIn2: "",
      laspseOfTimeIn2Option: "",
      // Step 16
      employed2: "",
      employerCityState2: "",
      employmentDate2: "",
      // Step 17
      unemployed2: "",
      unemployedDate2: "",
      // Step 18
      armedForces2: "",
      armedForcesDate2: "",
      // Step 19
      other2: "",
      otherDescription2: "",
      otherDate2: "",
      // Step 20
      sportDescription2: "",
      sport2: "",
      // Step 21
      collegeAthleticParticipation: "",
      everPlayedOnAthleticTeamInCollege: "",
      // Step 22
      secondSportDescription: "",
      secondSport: "",
      secondSportCollege: "",
      secondSportLevel: "",
      secondSportSemester: "",
      competitionYear: "",
      anotherSport: "",
      // Step 23
      sportDescription3: "",
      thirdSport: "",
      thirdSportCollege: "",
      thirdSportLevel: "",
      thirdSportSemester: "",
      thirdSportYear: "",
      thirdSportAnother: "",
      // Step 24
      sportDescription4: "",
      fourthSport: "",
      fourthSportCollege: "",
      fourthSportLevel: "",
      fourthSportSemester: "",
      fourthSportYear: "",
      // Step 25
      authorize: "",
      initials: "",
      // Step 26
      studentEligibility: "",
      signature: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    // currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    if (currentStep < this.state.lastStep) {
      currentStep += 1;
      this.setState({
        currentStep: currentStep,
      });
    }
  }

  _prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      communityCollege: this.state.communityCollege,
      athleticConference: this.state.athleticConference,
      sport: this.state.sport,
      phoneNumber: this.state.phoneNumber,
      fullName: this.state.fullName,
      streetAddress: this.state.streetAddress,
      cityStateZip: this.state.cityStateZip,
      gender: this.state.gender,
      studentId: this.state.studentId,
      currentDate: this.state.currentDate,
      highSchool: this.state.highSchool,
      highSchoolCityState: this.state.highSchoolCityState,
      dob: this.state.dob,
      highSchoolMonthYearGraduation: this.state.highSchoolMonthYearGraduation,
      secondSport: this.state.secondSport,
      secondSportCollege: this.state.secondSportCollege,
      secondSportLevel: this.state.secondSportLevel,
      secondSportSemester: this.state.secondSportSemester,
      secondSportYear: this.state.secondSportYear,
      competitionYear: this.state.competitionYear,
      thirdSport: this.state.thirdSport,
      thirdSportCollege: this.state.thirdSportCollege,
      thirdSportLevel: this.state.thirdSportLevel,
      thirdSportSemester: this.state.thirdSportSemester,
      thirdSportYear: this.state.thirdSportYear,
      fourthSport: this.state.fourthSport,
      fourthSportCollege: this.state.fourthSportCollege,
      fourthSportLevel: this.state.fourthSportLevel,
      fourthSportSemester: this.state.fourthSportSemester,
      fourthSportYear: this.state.fourthSportYear,
      afterHS: [],
    };
    if (
      this.state.afterHSOneName !== "" &&
      this.state.afterHSOneName !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.afterHSOneStartMonth,
        startYear: this.state.afterHSOneStartYear,
        endMonth: this.state.afterHSOneEndMonth,
        endYear: this.state.afterHSOneEndYear,
        name: this.state.afterHSOneName,
      });
    }
    if (
      this.state.afterHSTwoName !== "" &&
      this.state.afterHSTwoName !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.afterHSTwoStartMonth,
        startYear: this.state.afterHSTwoStartYear,
        endMonth: this.state.afterHSTwoEndMonth,
        endYear: this.state.afterHSTwoEndYear,
        name: this.state.afterHSTwoName,
      });
    }
    if (
      this.state.afterHSThreeName !== "" &&
      this.state.afterHSThreeName !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.afterHSThreeStartMonth,
        startYear: this.state.afterHSThreeStartYear,
        endMonth: this.state.afterHSThreeEndMonth,
        endYear: this.state.afterHSThreeEndYear,
        name: this.state.afterHSThreeName,
      });
    }
    if (
      this.state.afterHSFourName !== "" &&
      this.state.afterHSFourName !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.afterHSFourStartMonth,
        startYear: this.state.afterHSFourStartYear,
        endMonth: this.state.afterHSFourEndMonth,
        endYear: this.state.afterHSFourEndYear,
        name: this.state.afterHSFourName,
      });
    }
    if (
      this.state.afterHSOneName !== "" &&
      this.state.afterHSOneName !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.afterHSOneStartMonth,
        startYear: this.state.afterHSOneStartYear,
        endMonth: this.state.afterHSOneEndMonth,
        endYear: this.state.afterHSOneEndYear,
        name: this.state.afterHSOneName,
      });
    }
    if (
      this.state.unemploymentDate !== "" &&
      this.state.unemploymentDate !== undefined
    ) {
      data.afterHS.push({
        startMonth: "NTC",
        startYear: "NTC",
        endMonth: "NTC",
        endYear: "NTC",
        name: this.state.employerCityState,
      });
    }
    if (
      this.state.employerCityState !== "" &&
      this.state.employerCityState !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.employmentStartMonth,
        startYear: this.state.employmentStartYear,
        endMonth: this.state.employmentEndMonth,
        endYear: this.state.employmentEndYear,
        name: this.state.employerCityState,
      });
    }
    if (
      this.state.unemploymentStartMonth !== "" &&
      this.state.unemploymentStartMonth !== undefined
    ) {
      data.afterHS.push({
        startMonth: this.state.employmentStartMonth,
        startYear: this.state.employmentStartYear,
        endMonth: this.state.employmentEndMonth,
        endYear: this.state.employmentEndYear,
        name: "Unemployed",
      });
    }
    console.log("data");
    console.log(data);
    axios
      .post("https://project-david.herokuapp.com/api/post", data)
      // .post(" http://localhost:3201/api/post", data)
      .then((r) => {
        console.log("r: ", r);
      })
      .catch((err) => console.log("err in axios: ", err));
  };

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary float-left"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < this.state.lastStep) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  getData = () => {
    this.setState({ currentStep: "getData" });
  };
  backToForm = () => {
    this.setState({ currentStep: 1 });
  };

  populate = async () => {
    this.setState({
      formDescription: "Step 1 Description",
      currentDate: new Date().toISOString().substr(0, 10),
      fullName: "Santibout, Samuel, J",
      gender: "male",
      streetAddress: "123 Athletic Way",
      cityStateZip: "Irvine, CA 92548",
      phoneNumber: "5552134353",
      dob: "1989-11-23",
      studentId: "D320117",
      // Step 2
      communityCollegeInfo: "Current School Info",
      communityCollege: "Mount Miguel Community College",
      sport: "Men's Water Polo",
      athleticConference: "Orange Empire Conference (OEC)",
      currentCollegeStartMonth: "Jan",
      currentCollegeStartYear: "2019",
      currentCollegeEndMonth: "Jul",
      currentCollegeEndYear: "2019",
      // Step 3
      highSchoolInfo: "Step Three Info",
      highSchool: "Hoover High School",
      highSchoolCityState: "San Diego, CA 92064",
      highSchoolMonthYearGraduation: "June 2005",
      // Step 4
      accountForTimesAfterHS: "Step 4 Info",
      afterHSOneName: "Irvine Community College",
      afterHSOneStartMonth: "Jan",
      afterHSOneStartYear: "2011",
      afterHSOneEndMonth: "Jan",
      afterHSOneEndYear: "2012",
      afterHSOneAnother: "true",
      // Step 5
      secondCollegeAttended: "Step 5 Info",
      afterHSTwoName: "Golden West Community College",
      afterHSTwoStartMonth: "Jan",
      afterHSTwoStartYear: "2017",
      afterHSTwoEndMonth: "Aug",
      afterHSTwoEndYear: "2017",
      afterHSTwoAnother: "true",
      // Step 6
      thirdCollegeAttendedDescription: "Step Six Info",
      afterHSThreeName: "Costa Mesa Community College",
      afterHSThreeStartMonth: "Apr",
      afterHSThreeStartYear: "2019",
      afterHSThreeEndMonth: "Jul",
      afterHSThreeEndYear: "2019",
      afterHSThreeAnother: "true",
      // Step 7
      fourthCollegeAttendedDescription: "",
      afterHSFourName: "San Diego Community College",
      afterHSFourStartMonth: "May",
      afterHSFourStartYear: "2020",
      afterHSFourEndMonth: "Sep",
      afterHSFourEndYear: "2020",
      afterHSFourAnother: "true",
      // Step 8
      anyAdditionalTimeAfterHS: "",
      takenTimeOffSchool: "",
      // Step 9
      laspseOfTimeIn: "",
      timeOffOfSchoolReason: "",
      // Step 10
      employed: "",
      employerCityState: "",
      employmentDate: "",
      // Step 12
      unemployed: "",
      unemploymentDate: "",
      // Step 13
      armedForces: "",
      armedForcesDate: "",
      // Step 14
      other: "",
      otherDescription: "",
      otherDate: "",
      // Step 15
      laspseOfTimeIn2: "",
      laspseOfTimeIn2Option: "",
      // Step 16
      employed2: "",
      employerCityState2: "",
      employmentDate2: "",
      // Step 17
      unemployed2: "",
      unemployedDate2: "",
      // Step 18
      armedForces2: "",
      armedForcesDate2: "",
      // Step 19
      other2: "",
      otherDescription2: "",
      otherDate2: "",
      // Step 20
      sportDescription2: "",
      sport2: "",
      // Step 21
      collegeAthleticParticipation: "",
      everPlayedOnAthleticTeamInCollege: "",
      // Step 22
      secondSportDescription: "",
      secondSport: "Men's Water Polo",
      secondSportCollege: "Irvine Community College",
      secondSportLevel: "Redshirt",
      secondSportSemester: "Fall",
      secondSportYear: "2011",
      secondSportAnother: "true",
      // Step 23
      sportDescription3: "",
      thirdSport: "Men's Swimming And Diving",
      thirdSportCollege: "Golden West Community College",
      thirdSportLevel: "Varsity (College Level)",
      thirdSportSemester: "Winter",
      thirdSportYear: "2017",
      thirdSportAnother: "true",
      // Step 24
      sportDescription4: "",
      fourthSport: "Men's Wrestling",
      fourthSportCollege: "Costa Mesa Community College",
      fourthSportLevel: "Junior Varisty",
      fourthSportSemester: "Spring",
      fourthSportYear: "2019",
      // Step 25
      authorize: "",
      initials: "",
      // Step 26
      studentEligibility: "",
      signature: "",
    });
  };

  render() {
    return (
      <div className="App">
        <img className="cccaImg" src={cccaaImg} alt="CCCAA Image" />
        <div className="form-container">
          <div className="top-btns">
            <button onClick={this.populate}>Populate Form</button>
            {this.state.currentStep !== "getData" ? (
              <button onClick={this.getData} className="btn btn-primary">
                Display Data
              </button>
            ) : (
              <button onClick={this.backToForm} className="btn btn-primary">
                Back To Form
              </button>
            )}
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <form className="needs-validation" noValidate>
            <GetData currentStep={this.state.currentStep} />
            <StepOne
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              formDescription={this.state.formDescription}
              currentDate={this.state.currentDate}
              fullName={this.state.fullName}
              gender={this.state.gender}
              address={this.state.streetAddress}
              address2={this.state.cityStateZip}
              phoneNumber={this.state.phoneNumber}
              dob={this.state.dob}
              studentId={this.state.studentId}
            />
            <StepTwo
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              communityCollegeInfo={this.state.communityCollegeInfo}
              communityCollege={this.state.communityCollege}
              sport={this.state.sport}
              athleticConference={this.state.athleticConference}
              currentCollegeStartMonth={this.currentCollegeStartMonth}
              currentCollegeStartYear={this.currentCollegeStartYear}
              currentCollegeEndMonth={this.currentCollegeEndMonth}
              currentCollegeEndYear={this.currentCollegeEndYear}
            />
            <StepThree
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              highSchoolInfo={this.state.highSchoolInfo}
              highSchool={this.state.highSchool}
              highSchoolCityState={this.state.highSchoolCityState}
              highSchoolMonthYearGraduation={
                this.state.highSchoolMonthYearGraduation
              }
            />
            <StepFour
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              accountForTimesAfterHS={this.state.accountForTimesAfterHS}
              afterHSOneName={this.state.afterHSOneName}
              afterHSOneStartMonth={this.state.afterHSOneStartMonth}
              afterHSOneStartYear={this.state.afterHSOneStartYear}
              afterHSOneEndMonth={this.state.afterHSOneEndMonth}
              afterHSOneEndYear={this.state.afterHSOneEndYear}
              afterHSOneAnother={this.state.afterHSOneAnother}
            />
            <StepFive
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              secondCollegeAttended={this.state.secondCollegeAttended}
              afterHSTwoName={this.state.afterHSTwoName}
              afterHSTwoStartMonth={this.state.afterHSTwoStartMonth}
              afterHSTwoStartYear={this.state.afterHSTwoStartYear}
              afterHSTwoEndMonth={this.state.afterHSTwoEndMonth}
              afterHSTwoEndYear={this.state.afterHSTwoEndYear}
              afterHSTwoAnother={this.state.afterHSTwoAnother}
            />
            <StepSix
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              afterHSThreeName={this.state.afterHSThreeName}
              afterHSThreeStartMonth={this.state.afterHSThreeStartMonth}
              afterHSThreeStartYear={this.state.afterHSThreeStartYear}
              afterHSThreeEndMonth={this.state.afterHSThreeEndMonth}
              afterHSThreeEndYear={this.state.afterHSThreeEndYear}
              afterHSThreeAnother={this.state.afterHSThreeAnother}
            />
            <StepSeven
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              afterHSFourName={this.state.afterHSFourName}
              afterHSFourStartMonth={this.state.afterHSFourStartMonth}
              afterHSFourStartYear={this.state.afterHSFourStartYear}
              afterHSFourEndMonth={this.state.afterHSFourEndMonth}
              afterHSFourEndYear={this.state.afterHSFourEndYear}
              afterHSFourAnother={this.state.afterHSFourAnother}
            />
            <StepEight currentStep={this.state.currentStep} />
            <StepNine
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              anyAdditionalTimeAfterHS={this.state.anyAdditionalTimeAfterHS}
              takenTimeOffSchool={this.state.takenTimeOffSchool}
            />
            <StepTen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              laspseOfTimeIn={this.state.laspseOfTimeIn}
              timeOffOfSchoolReason={this.state.timeOffOfSchoolReason}
            />
            <StepEleven
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              employed={this.state.employed}
              employerCityState={this.state.employerCityState}
              employmentStartMonth={this.state.employmentStartMonth}
              employmentStartYear={this.state.employmentStartYear}
              employmentEndMonth={this.state.employmentEndMonth}
              employmentEndYear={this.state.employmentEndYear}
            />
            <StepTwelve
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              unemployerCityState={this.state.unemployerCityState}
              unemploymentStartMonth={this.state.unemploymentStartMonth}
              unemploymentStartYear={this.state.unemploymentStartYear}
              unemploymentEndMonth={this.state.unemploymentEndMonth}
              unemploymentEndYear={this.state.unemploymentEndYear}
            />
            <StepThirteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              armedForces={this.statearmedForces}
              armedForcesDate={this.statearmedForcesDate}
            />
            <StepFourteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              other={this.state.other}
              otherDescription={this.state.otherDescription}
              otherDate={this.state.otherDate}
            />
            <StepFifteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              laspseOfTimeIn2={this.state.laspseOfTimeIn2}
              laspseOfTimeIn2Option={this.state.laspseOfTimeIn2Option}
            />
            <StepSixteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              employed2={this.state.employed2}
              employerCityState2={this.state.employerCityState2}
              employmentDate2={this.state.employmentDate2}
            />
            <StepSeventeen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              unemployed2={this.unemployed2}
              unemployedDate2={this.unemploymentDate2}
            />
            <StepEighteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              armedForces2={this.state.armedForces2}
              armedForcesDate2={this.state.armedForcesDate2}
            />
            <StepNineteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              other2={this.state.other2}
              otherDescription2={this.state.otherDescription2}
              otherDate={this.state.otherDate2}
            />
            <StepTwenty
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              sportDescription2={this.state.sportDescription2}
              sport2={this.state.sport2}
            />
            <StepTwentyOne
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              collegeAthleticParticipation={
                this.state.collegeAthleticParticipation
              }
              everPlayedOnAthleticTeamInCollege={
                this.state.everPlayedOnAthleticTeamInCollege
              }
            />
            <StepTwentyTwo
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              secondSportDescription={this.state.secondSportDescription}
              secondSport={this.state.secondSport}
              secondSportCollege={this.state.secondSportCollege}
              secondSportLevel={this.state.secondSportLevel}
              secondSportSemester={this.state.secondSportSemester}
              secondSportYear={this.state.secondSportYear}
              secondSportAnother={this.state.secondSportAnother}
            />
            <StepTwentyThree
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              sportDescription3={this.state.sportDescription3}
              thirdSport={this.state.thirdSport}
              thirdSportCollege={this.state.thirdSportCollege}
              thirdSportLevel={this.state.thirdSportLevel}
              thirdSportSemester={this.state.thirdSportSemester}
              thirdSportYear={this.state.thirdSportYear}
              thirdSportAnother={this.state.thirdSportAnother}
            />
            <StepTwentyFour
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              sportDescription4={this.state.sportDescription4}
              fourthSport={this.state.fourthSport}
              fourthSportCollege={this.state.fourthSportCollege}
              fourthSportYear={this.state.fourthSportYear}
              fourthSportLevel={this.state.fourthSportLevel}
              fourthSportSemester={this.state.fourthSportSemester}
              fourthSportYear={this.state.fourthSportYear}
              anotherSport4={this.state.anotherSport4}
            />
            <StepTwentyFive
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              authorize={this.state.authorize}
              initials={this.state.initials}
            />
            <StepTwentySix
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              studentEligibility={this.state.studentEligibility}
              signature={this.state.signature}
            />
          </form>
          <div className="left-right-btns">
            {this.previousButton}
            {this.nextButton}
          </div>
          {/* {this.state.currentStep === this.state.lastStep && (
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          )} */}
        </div>
      </div>
    );
  }
}
export default App;
