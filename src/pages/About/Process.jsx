import React from 'react';
import Showcase from "../../components/Showcase/Showcase.jsx";
import Explore from "../../components/Explore/Explore.jsx";

const Process = () => {
  return (
    <>

      <Showcase title='Heatlhcare Traveler'/>

      <div className="container mx-auto m-5">
        <section className="faqs">
          <h2>What is the process of becoming a HealthCare Traveler?</h2>
          <p>
            Follow these six easy steps to begin or continue your healthcare traveling experience!
          </p>
          <hr/>
          <ul>
            <li>
              <h3>1. Complete the HCEN online application & skills checklist for your particular discipline and specialty or specialties.</h3>
              <p>
                Be flexible with your healthcare travel agency and your assigned facility! Be open to locations and
                willing to travel to a variety of areas. Each assignment is unique and will involve different healthcare
                facilities, different management styles, and different policies. It is up to you to adapt but the reward
                is the added professional experience from each assignment.
              </p>
            </li>

            <li>
              <h3>Maintain Your Health</h3>
              <p>
                Take care of yourself! A change in location or environment is a shock to your system. Eat healthy and
                exercise when you can. Traveling as a healthcare professional is a wonderful opportunity and good health
                will enhance the experience.
              </p>
            </li>

            <li>
              <h3>
                Five Questions to Ask Yourself When Considering a Healthcare Traveler Lifestyle
              </h3>
              <p>
                <ul>
                  <li>
                    <i className="fa fa-fw fa-check"></i> What is my motivation for becoming a healthcare traveler?
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i>
                    Do I have the personality to adapt to a changing environment?
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i>
                    When can I start?
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i>
                    Where do I want to go and why?
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i>
                    Have I gathered the proper paper work to travel as a healthcare professional?
                  </li>
                </ul>

                (You will need proper licensure, vaccination records, current PPD, etc…your agency recruiter will go
                over that with you and most of the needed records can be obtained from the HR department at your current
                or last workplace.)
              </p>
            </li>

            <li>
              <h3>Enjoy yourself!</h3>
              <p>
                This is an opportunity to learn about a different region of the country. Take the time to visit local
                attractions such as state and national parks. Sample the local cuisine! Visit www.foodnetwork.com or
                www.yelp.com for local restaurant recommendations. Make friends and stay in touch!
              </p>
            </li>
            <li>
              <h3>It is important to remember that you are a guest!</h3>
              <p>
                You will be on assignment for a relatively short time. Always remember that you are a “guest.” Respect
                and adapt to the policies and procedures of your assigned healthcare facility.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <Explore/>


    </>
  );
};

export default Process;
