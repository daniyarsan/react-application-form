import React from 'react';
import Showcase from "../../components/Showcase/Showcase.jsx";
import Explore from "../../components/Explore/Explore.jsx";

const HealthcareTraveler = () => {
  return (
    <>

      <Showcase title='Healthcare Traveler'/>

      <div className="container mx-auto m-5">
        <section className="faqs">
          <h2>What is a Healthcare Traveler?</h2>
          <ul>
            <li>
              <h3>What is Healthcare Traveler?</h3>
              <p>
                A Healthcare Traveler is an experienced professional that works for Healthcare Travel Agencies dedicated
                to providing healthcare facilities with short term staffing support. Travel Assignments in healthcare
                cover a variety of specialties both clinical and non clinical. The clinical opportunities include
                Nursing, Allied Health, and Advanced Practice / Physicians but there are also travelers that work in
                Billing (Certified Professional Coders) and Information Technology. Most assignments are for 3 months
                but many of those assignments are extended. At the HealthCare Employment Network we only work with
                clinical travelers. Healthcare Traveling isn’t for everyone but those that choose to travel find the
                experience to be financially rewarding and professionally and personally enlightening.
              </p>
            </li>


            <li>
              <h3>A healthcare traveler must meet the following criteria:</h3>
              <p>
                <ul>
                  <li>
                    <i className="fa fa-fw fa-check"></i> HCEN requires at least two years of experience in your field before we can present you to any of our clients.
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i> Must be able to be obtain professional licensure in the state for which you want to travel
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i> Must be able to provide pre-employment medical certifications such as Vaccination Records, BLS Certs, Current PPD, etc…most of what you need can be provided to you from the HR department at your previous place of employment.
                  </li>
                </ul>
              </p>
            </li>

            <li>
              <h3>
                There are many reasons a healthcare facility will utilize a traveling healthcare professional including:
              </h3>
              <p>
                <ul>
                  <li>
                    <i className="fa fa-fw fa-check"></i> Supplemental staffing where there are shortages in your given discipline or specialty
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i> Seasonal needs such as in resort areas where the population increases during the Summer
                  </li>
                  <li>
                    <i className="fa fa-fw fa-check"></i> Staffing in rural areas
                  </li>
                </ul>
              </p>
            </li>

          </ul>
        </section>
      </div>

      <Explore />


    </>
  );
};

export default HealthcareTraveler;
