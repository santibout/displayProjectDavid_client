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
      previousCommunityCollege: "",
      previousCommunityCollegeStartMonthYear: "",
      hasAttendedAnotherCollege: "",
      // Step 5
      secondCollegeAttended: "",
      secondCollegeName: "",
      secondCollegeStartMonthYear: "",
      secondCollegeStopMonthYear: "",
      hasAttendedAnotherCollege2: "",
      // Step 6
      thirdCollegeAttendedDescription: "",
      thirdCollegeName: "",
      thirdCollegeStartMonthYear: "",
      thirdCollegeStopMonthYear: "",
      hasAttendedAnotherCollege3: "",
      // Step 7
      fourthCollegeAttendedDescription: "",
      fourthCollegeName: "",
      fourthCollegeStartMonthYear: "",
      fourthCollegeStopMonthYear: "",
      hasAttendedAnotherCollege4: "",
      // Step 9
      anyAdditionalTimeAfterHS: "",
      takenTimeOffSchool: "",
      // Step 10
      laspseOfTimeIn: "",
      timeOffOfSchoolReason: "",
      // Step 11
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
      secondSport: "",
      whichCollege: "",
      sportLevel: "",
      semester: "",
      competitionYear: "",
      anotherSport: "",
      // Step 23
      sportDescription3: "",
      sport3: "",
      sport3College: "",
      sportLevel3: "",
      sport3Semester: "",
      sport3Year: "",
      anotherSport3: "",
      // Step 24
      sportDescription4: "",
      sport4: "",
      sport4College: "",
      sportLevel4: "",
      sport4Semester: "",
      sport4Year: "",
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
    const {
      formDescription,
      currentDate,
      fullName,
      gender,
      streetAddress,
      cityStateZip,
      phoneNumber,
      dob,
      studentId,
      communityCollegeInfo,
      communityCollege,
      sport,
      athleticConference,
      highSchoolInfo,
      highSchool,
      highSchoolCityState,
      highSchoolMonthYearGraduation,
      accountForTimesAfterHS,
      previousCommunityCollege,
      previousCommunityCollegeStartMonthYear,
      hasAttendedAnotherCollege,
      secondCollegeAttended,
      secondCollegeName,
      secondCollegeStartMonthYear,
      secondCollegeStopMonthYear,
      hasAttendedAnotherCollege2,
      thirdCollegeAttendedDescription,
      thirdCollegeName,
      thirdCollegeStartMonthYear,
      thirdCollegeStopMonthYear,
      hasAttendedAnotherCollege3,
      fourthCollegeAttendedDescription,
      fourthCollegeName,
      fourthCollegeStartMonthYear,
      fourthCollegeStopMonthYear,
      hasAttendedAnotherCollege4,
      anyAdditionalTimeAfterHS,
      takenTimeOffSchool,
      laspseOfTimeIn,
      timeOffOfSchoolReason,
      employed,
      employerCityState,
      employmentDate,
      unemployed,
      unemploymentDate,
      armedForces,
      armedForcesDate,
      other,
      otherDescription,
      otherDate,
      laspseOfTimeIn2,
      laspseOfTimeIn2Option,
      employed2,
      employerCityState2,
      employmentDate2,
      unemployed2,
      unemployedDate2,
      armedForces2,
      armedForcesDate2,
      other2,
      otherDescription2,
      otherDate2,
      sportDescription2,
      sport2,
      collegeAthleticParticipation,
      everPlayedOnAthleticTeamInCollege,
      secondSportDescription,
      secondSport,
      whichCollege,
      sportLevel,
      semester,
      competitionYear,
      anotherSport,
      sportDescription3,
      sport3,
      sport3College,
      sportLevel3,
      sport3Semester,
      sport3Year,
      anotherSport3,
      sportDescription4,
      sport4,
      sport4College,
      sportLevel4,
      sport4Semester,
      sport4Year,
      authorize,
      initials,
      studentEligibility,
      signature,
    } = this.state;

    axios
      .post("https://project-david.herokuapp.com/api/post", this.state)
      // .post("/api/post", this.state)
      .then((r) => console.log("r: ", r))
      .catch((err) => console.log("err: ", err));

    // console.log(`Your registration detail: \n
    // Form Description: ${formDescription} \n
    // Curent Date: ${currentDate} \n
    // Full Name: ${fullName} \n
    // Gender: ${gender} \n
    // Street Address: ${streetAddress} \n
    // City, State, ZIP: ${cityStateZip} \n
    // Phone Number: ${phoneNumber} \n
    // DOB: ${dob} \n
    // Student ID: ${studentId}
    //   \n \n
    // Current Community College Info: ${communityCollegeInfo} \n
    // Community College: ${communityCollege} \n
    // Sport: ${sport} \n
    // Athletic Conference: ${athleticConference}
    //   \n \n
    // highSchoolInfo: ${highSchoolInfo} \n
    // highSchool: ${highSchool} \n
    // highSchoolCityState: ${highSchoolCityState} \n
    // highSchoolMonthYearGraduation: ${highSchoolMonthYearGraduation} \n
    //   \n \n
    // accountForTimesAfterHS: ${accountForTimesAfterHS} \n
    // previousCommunityCollege: ${previousCommunityCollege} \n
    // previousCommunityCollegeStartMonthYear: ${previousCommunityCollegeStartMonthYear} \n
    // hasAttendedAnotherCollege: ${hasAttendedAnotherCollege} \n
    //   \n \n
    // secondCollegeAttended: ${secondCollegeAttended} \n
    // secondCollegeName: ${secondCollegeName} \n
    // secondCollegeStartMonthYear: ${secondCollegeStartMonthYear} \n
    // secondCollegeStopMonthYear: ${secondCollegeStopMonthYear} \n
    // hasAttendedAnotherCollege2: ${hasAttendedAnotherCollege2} \n
    //   \n \n
    // thirdCollegeAttendedDescription: ${thirdCollegeAttendedDescription} \n
    // thirdCollegeName: ${thirdCollegeName} \n
    // thirdCollegeStartMonthYear: ${thirdCollegeStartMonthYear} \n
    // thirdCollegeStopMonthYear: ${thirdCollegeStopMonthYear} \n
    // hasAttendedAnotherCollege3: ${hasAttendedAnotherCollege3} \n
    //   \n \n
    // fourthCollegeAttendedDescription: ${fourthCollegeAttendedDescription} \n
    // fourthCollegeName: ${fourthCollegeName} \n
    // fourthCollegeStartMonthYear: ${fourthCollegeStartMonthYear} \n
    // fourthCollegeStopMonthYear: ${fourthCollegeStopMonthYear} \n
    // hasAttendedAnotherCollege3: ${hasAttendedAnotherCollege4} \n
    //   \n \n
    // anyAdditionalTimeAfterHS: ${anyAdditionalTimeAfterHS} \n
    // takenTimeOffSchool: ${takenTimeOffSchool} \n
    //   \n \n
    // laspseOfTimeIn: ${laspseOfTimeIn} \n
    // timeOffOfSchoolReason: ${timeOffOfSchoolReason}\n
    //   \n \n
    // employed: ${employed} \n
    // employerCityState: ${employerCityState} \n
    // employmentDate: ${employmentDate} \n
    //   \n \n
    // unemployed: ${unemployed} \n
    // unemploymentDate: ${unemploymentDate} \n
    //   \n \n
    // armedForces: ${armedForces} \n
    // armedForcesDate: ${armedForcesDate} \n
    //   \n \n
    // other: ${other} \n
    // otherDescription: ${otherDescription} \n
    // otherDate: ${otherDate} \n
    //   \n \n
    // laspseOfTimeIn2: ${laspseOfTimeIn2} \n
    // laspseOfTimeIn2Option: ${laspseOfTimeIn2Option} \n
    //   \n \n
    // employed2: ${employed2} \n
    // employerCitySate2: ${employerCityState2} \n
    // employmentDate2: ${employmentDate2} \n
    //   \n \n
    // unemployed2: ${unemployed2} \n
    // unemployedDate2: ${unemployedDate2} \n
    //   \n \n
    // armedForces2: ${armedForces2} \n
    // armedForcesDate2: ${armedForcesDate2} \n
    //   \n \n
    // other2: ${other2} \n
    // otherDescription2: ${otherDescription2} \n
    // otherDate2: ${otherDate2} \n
    //   \n \n
    // sportDescription2: ${sportDescription2} \n
    // sport2: ${sport2} \n
    //   \n \n
    // collegeAthleticParticipation: ${collegeAthleticParticipation} \n
    // everPlayedOnAnAthleticTeamInCollege: ${everPlayedOnAthleticTeamInCollege} \n
    //   \n \n
    // secondSportDescription: ${secondSportDescription} \n
    // secondSport: ${secondSport} \n
    // whichCollege: ${whichCollege} \n
    // sportLevel: ${sportLevel} \n
    // semester: ${semester} \n
    // competitionYear: ${competitionYear} \n
    // anotherSport: ${anotherSport} \n
    //   \n \n
    // sportDescription3: ${sportDescription3} \n
    // sport3: ${sport3} \n
    // sport3College: ${sport3College} \n
    // sportLevel3: ${sportLevel3} \n
    // sport3Semester: ${sport3Semester} \n
    // sport3Year: ${sport3Year} \n
    // anotherSport3: ${anotherSport3}
    //   \n \n
    // sportDescription4: ${sportDescription4} \n
    // sport4: ${sport4} \n
    // sport4College: ${sport4College} \n
    // sportLevel4: ${sportLevel4} \n
    // sport4Semester: ${sport4Semester} \n
    // sport4Year: ${sport4Year} \n
    //   \n \n
    // authorize: ${authorize} \n
    // initials: ${initials} \n
    //   \n \n
    // studentEligibility: ${studentEligibility} \n
    // signature: ${signature}
    // `);
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

  render() {
    return (
      <div className="App">
        <img className="cccaImg" src={cccaaImg} alt="CCCAA Image" />
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <StepOne
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              formDescription={this.state.formDescription}
              date={this.state.date}
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
              handleSubmit={this.handleSubmit}
              accountForTimesAfterHS={this.state.accountForTimesAfterHS}
              previousCommunityCollege={this.state.previousCommunityCollege}
              previousCommunityCollegeStartMonthYear={
                this.state.previousCommunityCollegeStartMonthYear
              }
              hasAttendedAnotherCollege={this.state.hasAttendedAnotherCollege}
            />
            <StepFive
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              secondCollegeAttended={this.state.secondCollegeAttended}
              secondCollegeName={this.state.secondCollegeName}
              secondCollegeStartMonthYear={
                this.state.secondCollegeStartMonthYear
              }
              secondCollegeStopMonthYear={this.state.secondCollegeStopMonthYear}
              hasAttendedAnotherCollege2={this.state.hasAttendedAnotherCollege2}
            />
            <StepSix
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              thirdCollegeAttendedDescription={
                this.state.thirdCollegeAttendedDescription
              }
              thirdCollegeName={this.state.thirdCollegeName}
              thirdCollegeStartMonthYear={this.state.thirdCollegeStartMonthYear}
              thirdCollegeStopMonthYear={this.state.thirdCollegeStopMonthYear}
              hasAttendedAnotherCollege3={this.state.hasAttendedAnotherCollege3}
            />
            <StepSeven
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              fourthCollegeAttendedDescription={
                this.state.fourthCollegeAttendedDescription
              }
              fourthCollegeName={this.state.fourthCollegeName}
              fourthCollegeStartMonthYear={
                this.state.fourthCollegeStartMonthYear
              }
              fourthCollegeStopMonthYear={this.state.fourthCollegeStopMonthYear}
              hasAttendedAnotherCollege4={this.state.hasAttendedAnotherCollege4}
            />
            <StepEight currentStep={this.state.currentStep} />
            <StepNine
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              anyAdditionalTimeAfterHS={this.state.anyAdditionalTimeAfterHS}
              takenTimeOffSchool={this.state.takenTimeOffSchool}
            />
            <StepTen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              laspseOfTimeIn={this.state.laspseOfTimeIn}
              timeOffOfSchoolReason={this.state.timeOffOfSchoolReason}
            />
            <StepEleven
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              employed={this.state.employed}
              employerCityState={this.state.employerCityState}
              employmentDate={this.state.employmentDate}
            />
            <StepTwelve
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              unemployed={this.unemployed}
              unemploymentDate={this.unemploymentDate}
            />
            <StepThirteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              armedForces={this.statearmedForces}
              armedForcesDate={this.statearmedForcesDate}
            />
            <StepFourteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              other={this.state.other}
              otherDescription={this.state.otherDescription}
              otherDate={this.state.otherDate}
            />
            <StepFifteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              laspseOfTimeIn2={this.state.laspseOfTimeIn2}
              laspseOfTimeIn2Option={this.state.laspseOfTimeIn2Option}
            />
            <StepSixteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              employed2={this.state.employed2}
              employerCityState2={this.state.employerCityState2}
              employmentDate2={this.state.employmentDate2}
            />
            <StepSeventeen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              unemployed2={this.unemployed2}
              unemployedDate2={this.unemploymentDate2}
            />
            <StepEighteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              armedForces2={this.state.armedForces2}
              armedForcesDate2={this.state.armedForcesDate2}
            />
            <StepNineteen
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              other2={this.state.other2}
              otherDescription2={this.state.otherDescription2}
              otherDate={this.state.otherDate2}
            />
            <StepTwenty
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              sportDescription2={this.state.sportDescription2}
              sport2={this.state.sport2}
            />
            <StepTwentyOne
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
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
              handleSubmit={this.handleSubmit}
              secondSportDescription={this.state.secondSportDescription}
              secondSport={this.state.secondSport}
              whichCollege={this.state.whichCollege}
              sportLevel={this.state.sportLevel}
              semester={this.state.semester}
              competitionYear={this.state.competitionYear}
              anotherSport={this.state.anotherSport}
            />
            <StepTwentyThree
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              sportDescription3={this.state.sportDescription3}
              sport3={this.state.sport3}
              sport3College={this.state.sport3College}
              sport3Year={this.state.sport3Year}
              sportLevel3={this.state.sportLevel3}
              sport3Semester={this.state.sport3Semester}
              sport3Year={this.state.sport3Year}
              anotherSport3={this.state.anotherSport3}
            />
            <StepTwentyFour
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              sportDescription4={this.state.sportDescription4}
              sport4={this.state.sport4}
              sport4College={this.state.sport4College}
              sport4Year={this.state.sport4Year}
              sportLevel4={this.state.sportLevel4}
              sport4Semester={this.state.sport4Semester}
              sport4Year={this.state.sport4Year}
              anotherSport4={this.state.anotherSport4}
            />
            <StepTwentyFive
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
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
          {this.state.currentStep === this.state.lastStep && (
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default App;
