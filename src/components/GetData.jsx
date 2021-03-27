import React, { Component } from "react";
import axios from "axios";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("mounting");
    axios.get(`https://project-david.herokuapp.com/api`).then((res) => {
      // axios.get(`http://localhost:3201/api`).then((res) => {
      const gotData = res.data;
      console.log("got data: ", gotData);
      this.setState({ data: [...gotData] });
    });
  }
  render() {
    const style = {
      border: "1px solid white",
      margin: "5px",
      //   listStyle: "none",
    };
    const listItems = this.state.data.map((d) => {
      return (
        <div style={style}>
          <li key={d._id} />
          <li>{d.formDescription}</li>
          <li>{d.currentDate}</li>
          <li>{d.fullName}</li>
          <li>{d.gender}</li>
          <li>{d.streetAddress}</li>
          <li>{d.cityStateZip}</li>
          <li>{d.phoneNumber}</li>
          <li>{d.dob}</li>
          <li>{d.studentId}</li>
          <li>{d.communityCollegeInfo}</li>
          <li>{d.communityCollege}</li>
          <li>{d.sport}</li>
          <li>{d.athleticConference}</li>
          <li>{d.highSchoolInfo}</li>
          <li>{d.highSchool}</li>
          <li>{d.highSchoolCityState}</li>
          <li>{d.highSchoolMonthYearGraduation}</li>
          <li>{d.accountForTimesAfterHS}</li>
          <li>{d.previousCommunityCollege}</li>
          <li>{d.previousCommunityCollegeStartMonthYear}</li>
          <li>{d.hasAttendedAnotherCollege}</li>
          <li>{d.secondCollegeAttended}</li>
          <li>{d.secondCollegeName}</li>
          <li>{d.secondCollegeStartMonthYear}</li>
          <li>{d.secondCollegeStopMonthYear}</li>
          <li>{d.hasAttendedAnotherCollege2}</li>
          <li>{d.thirdCollegeAttendedDescription}</li>
          <li>{d.thirdCollegeName}</li>
          <li>{d.thirdCollegeStartMonthYear}</li>
          <li>{d.thirdCollegeStopMonthYear}</li>
          <li>{d.hasAttendedAnotherCollege3}</li>
          <li>{d.fourthCollegeAttendedDescription}</li>
          <li>{d.fourthCollegeName}</li>
          <li>{d.fourthCollegeStartMonthYear}</li>
          <li>{d.fourthCollegeStopMonthYear}</li>
          <li>{d.hasAttendedAnotherCollege4}</li>
          <li>{d.anyAdditionalTimeAfterHS}</li>
          <li>{d.takenTimeOffSchool}</li>
          <li>{d.laspseOfTimeIn}</li>
          <li>{d.timeOffOfSchoolReason}</li>
          <li>{d.employed}</li>
          <li>{d.employerCityState}</li>
          <li>{d.employmentDate}</li>
          <li>{d.unemployed}</li>
          <li>{d.unemploymentDate}</li>
          <li>{d.armedForces}</li>
          <li>{d.armedForcesDate}</li>
          <li>{d.other}</li>
          <li>{d.otherDescription}</li>
          <li>{d.otherDate}</li>
          <li>{d.laspseOfTimeIn2}</li>
          <li>{d.laspseOfTimeIn2Option}</li>
          <li>{d.employed2}</li>
          <li>{d.employerCityState2}</li>
          <li>{d.employmentDate2}</li>
          <li>{d.unemployed2}</li>
          <li>{d.unemployedDate2}</li>
          <li>{d.armedForces2}</li>
          <li>{d.armedForcesDate2}</li>
          <li>{d.other2}</li>
          <li>{d.otherDescription2}</li>
          <li>{d.otherDate2}</li>
          <li>{d.sportDescription2}</li>
          <li>{d.sport2}</li>
          <li>{d.collegeAthleticParticipation}</li>
          <li>{d.everPlayedOnAthleticTeamInCollege}</li>
          <li>{d.secondSportDescription}</li>
          <li>{d.secondSport}</li>
          <li>{d.whichCollege}</li>
          <li>{d.sportLevel}</li>
          <li>{d.semester}</li>
          <li>{d.competitionYear}</li>
          <li>{d.anotherSport}</li>
          <li>{d.sportDescription3}</li>
          <li>{d.sport3}</li>
          <li>{d.sport3College}</li>
          <li>{d.sportLevel3}</li>
          <li>{d.sport3Semester}</li>
          <li>{d.sport3Year}</li>
          <li>{d.anotherSport3}</li>
          <li>{d.sport4}</li>
          <li>{d.sport4College}</li>
          <li>{d.sportLevel4}</li>
          <li>{d.sport4Semester}</li>
          <li>{d.sport4Year}</li>
          <li>{d.authorize}</li>
          <li>{d.initials}</li>
          <li>{d.studentEligibility}</li>
          <li>{d.signature}</li>
        </div>
      );
    });

    if (this.props.currentStep !== "getData") {
      return null;
    }
    return (
      <div className="container">
        <h1>Get Data</h1>
        {listItems}
      </div>
    );
  }
}

export default StepOne;
