import React from 'react';
import Showcase from "../../components/Showcase/Showcase.jsx";
import Explore from "../../components/Explore/Explore.jsx";

const StaffingSelection = () => {
  return (
    <>

      <Showcase title='Heatlhcare Traveler'/>

      <div className="container mx-auto m-5">
        <section className="faqs">
          <h2>Selecting Your Staffing Agency</h2>
          <p>
            Healthcare Travel Agencies are contracted with numerous healthcare facilities nationwide to provide
            qualified and experienced healthcare professionals for travel assignments. Available positions are abundant
            and the healthcare facilities depend on the healthcare travel agencies to help them through staffing
            shortages or seasonal needs.
          </p>
          <p>
            The mission of the Healthcare Employment Network is to connect you with the top healthcare travel agencies
            so that those agencies can contact you about travel assignments. We only work with those agencies that place
            healthcare travelers nationally and with the best facilities.
          </p>

          <hr/>

          <ul>
            <li>
              <h3>Can I Apply With More Than One Staffing Agency?</h3>
              <p>
                Yes! At the HealthCare Employment Network ( www.healthcaretravelers.com ) you can apply with up to 15 healthcare travel agencies at the same time. Many of the travel agencies offer the same assignments but with each agency there are also available assignments specific to that agency.
              </p>
            </li>

            <li>
              <h3>
                Is It Easy to Change Companies if I’m not Satisfied?
              </h3>
              <p>
                Yes! Upon completion of your original assignment you can change agencies or let multiple agencies know of your availability. Not every assignment is perfect but we do not suggest ever leaving an assignment early unless for drastic reasons such as health or being asked to do something that would put your license in jeopardy.

              </p>
            </li>

            <li>
              <h3>Questions to Ask When Choosing a Staffing Agency</h3>
              <p>
                <i className="fa fa-fw fa-check"></i>
                How long has the travel agency been in business?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                What if my assignment is cancelled by no fault of my own?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Is there a completion bonus?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Is there a guarantee of hours per week?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                What is the feedback from your current travelers about the particular facility?
              </p>

              <p>
                <i className="fa fa-fw fa-check"></i>
                What are the rates per hour? Overtime pay? Holiday pay?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Is there a Renewal/Extension bonus?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                What are my housing options?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Is there health insurance and what is the cost and name of the insurance provider?
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                If I stay with your agency, will I accrue vacation time?
              </p>
            </li>
            <li>
              <h3>What Should I Look for When Selecting a Healthcare Travel Agency?</h3>
              <p>
                <i className="fa fa-fw fa-check"></i>
                When choosing a healthcare staffing agency it is important to choose one that represents your discipline
                and specialty. HCEN clients know your experience and preferences because they have your comprehensive
                profile
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Each travel agency contracts with different facilities and sometimes more than one travel agency works with the same facility. When your agency recruiter presents a position to you, ask questions.   Some agencies will pay more than others but it won’t be appreciably different if the position is for the same facility. Make sure you are comfortable with the compensation, benefits, and the particulars of the assignment before accepting
              </p>
            </li>
          </ul>
        </section>
      </div>

      <Explore/>

    </>
  );
};

export default StaffingSelection;
