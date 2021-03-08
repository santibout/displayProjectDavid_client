import React, { Component } from "react";

class StepTwentySix extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 26) {
      return null;
    }
    return (
      <div className="container">
        <h3>Step 26 of 26</h3>
        <div className="row">
          <div className="col-md">
            <div className="mb-3">
              <label htmlFor="studentEligibility" className="form-label">
                Student Eligibility Report
              </label>
              <input
                className="form-control"
                type="text"
                id="studentEligibility"
                name="studentEligibility"
                value={this.props.studentEligibility}
                onChange={this.props.handleChange}
                placeholder="Description (optional)"
              />
            </div>
            <div className="mb-3">
              <h5>Student Eligibility Report</h5>
              <p>
                Student-Athlete - Please read the following prior to signing
                this form. If you have questions, please ask! 1. I understand
                that in order to be eligible for intercollegiate competition, I
                must be continuously and actively enrolled and attending class
                in a minimum of 12 units at my community college during the
                season of sport, notwithstanding other articles/bylaws of the
                CCCAA Constitution and Bylaws. (Bylaw 1.3.1) * Of the 12 units,
                at least 9 shall be attempted in courses counting toward
                remediation, career technical education/certificate courses,
                associate degree requirements, transfer/general education,
                and/or lower division theoretical major preparation courses as
                defined by the college catalog and/or articulation agreements
                and be consistent with my educational plan. The college shall
                certify that I have an individual educational plan on file.
                (Bylaw 1.3.1.B) 2. I understand that actual competition in a
                scheduled game, meet, or match (except scrimmages for CCCAA
                purposes) during a sports season shall be recorded as one season
                of competition in that sport. (Bylaw 1.5) 3. In order to be
                eligible for the second season of sport, I must successfully
                complete and pass 24-semester/36-quarter units at an accredited
                postsecondary institution and complete a minimum 6 units during
                my last full-time term*. The 24-semester/36-quarter unit count
                begins with and includes the units taken during the first
                semester/quarter of competition for that sport and must be
                completed prior to the beginning of the semester/quarter of the
                second season of sport. Units from a course repeated to raise a
                grade of “D” or better shall not be counted to satisfy this
                second-season-of-sport unit eligibility rule. (Bylaw 1.6) * Of
                the 24-semester/36-quarter units to be completed,
                18-semester/27-quarter units shall be in course work counting
                toward remediation, career technical education/certificate
                courses, associate degree requirements, transfer/general
                education, and/or lower division theoretical major preparation
                courses as defined by the college catalog and/or articulation
                agreements and be consistent with my educational plan. (Bylaw
                1.6.1.2) 4. I understand that once I have competed in a
                CCCAA-sanctioned sport, I must maintain a minimum cumulative 2.0
                GPA and complete a minimum of 6 units during my last full-time
                term* to continue to be eligible for any sport. 5. I understand
                that I may not and have not: participated or competed at another
                college during this season of sport and have not attended an
                intercollegiate athletic class. I also understand that as a
                member of a team sport, I may not compete/practice with any
                outside team in that sport during the season of that sport (See
                sports listed in Bylaw 3.7). 6. I have never been paid for
                athletic competition, have never signed a professional contract
                and I am an amateur in this sport. 7. I understand that I may
                NOT receive financial assistance (housing, jobs, transportation,
                etc.) or other special privileges for my participation in
                athletics. 8. I understand that to be eligible to transfer and
                compete at an NCAA college I may need to register with the NCAA
                Eligibility Center and meet specific transfer requirements. 9.
                STATE DECORUM POLICY—I understand the following offenses will
                result in the stated discipline plus any other sanctions deemed
                appropriate: A. Ejection from a contest for language or
                unsportsmanlike conduct will result in suspension from the next
                scheduled contest. B. Second ejection from a contest in the same
                season will result in a suspension from all remaining contests.
                C. Physically assaulting or attempting to physically assault an
                official shall result in immediate ejection and the individual
                shall be suspended from participation in any CCCAA event for a
                period of sixty (60) months. D. Physically assaulting or
                attempting to assault anyone (other than an official) during an
                event will result in ejection from that contest and suspension
                from the next two contests. E. Leaving position or the
                bench/sidelines in reaction to an altercation, but not becoming
                physically involved will result in ejection from that contest
                and suspension from the next scheduled contest. F. The use or
                possession of any drugs, alcohol or tobacco will result in
                ejection from that contest and suspension from the next two
                contests. 10. I authorize college authorities to release
                information about my athletic and academic records for the sole
                purpose of determining athletic eligibility, as well as my
                height, weight, and year in college. 11. My initials authorize
                the use and publication of my likeness by the CCCAA and its
                member institutions: 12. I understand that there are special
                rules for student-athletes. I understand and will abide by the
                above statements and all rules of athletic eligibility.
                Information falsely given or concealed by me will cause my
                college’s forfeitures of all games, meets, and/or matches in
                which I competed, and that I may be designated ineligible for
                further competition. If I do not agree with any item above, my
                explanation is attached to this form. 13. My signature on the
                front of this form certifies that I have read and understand the
                above.
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="signature" className="form-label">
                My signature below certifies that I have read and understand the
                above.
              </label>
              <input
                className="form-control"
                type="text"
                id="signature"
                name="signature"
                value={this.props.signature}
                onChange={this.props.handleChange}
                placeholder="Short answer text"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepTwentySix;
