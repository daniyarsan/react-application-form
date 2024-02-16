import React from 'react';
import Showcase from "../../components/Showcase/Showcase.jsx";
import Explore from "../../components/Explore/Explore.jsx";

const TravelAccommodations = () => {
  return (
    <>

      <Showcase title='Heatlhcare Traveler'/>

      <div className="container mx-auto m-5">

        <section className="faqs my-4">
          <h2>Housing and Accommodations for Healthcare Travelers</h2>
          <p>
            Typically, a Healthcare Traveler has two options for housing while on assignment. You should always talk
            with your recruiter and the travel agency’s housing department to determine which option is best for you.
          </p>

          <hr/>

          <ul>
            <li>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Accept corporate housing coordinated by the housing department with the agency for which you are
                working. Housing providing by the travel agency will be fully furnished.
              </p>
            </li>

            <li>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Accept tax free housing “per diem” from the agency for which you are working and arrange for your own
                housing.
              </p>
            </li>

          </ul>

          <p>
            One of the factors to consider when choosing housing options is how far from home you will be traveling for your assignment. Below are some common scenarios:
          </p>

          <ul>
            <li>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Your travel assignment is close enough that you can go home during off days in your schedule. For example: If you are a RN and your schedule is three 12 hour shifts and your assignment is close enough to home to commute on your off days then it might make sense to accept the housing “per diem” and find your own accommodations. Research Extended Stay or Corporate Hotels near your assignment and only pay for the nights you need. Be aware: Ideally your three 12’s will be on consecutive days but that is not always the case and can change during your assignment.
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Your travel assignment is close enough that you can go home during off days in your schedule. For example: If you are a RN and your schedule is three 12 hour shifts and your assignment is close enough to home to commute on your off days then it might make sense to accept the housing “per diem” and find your own accommodations. Research Extended Stay or Corporate Hotels near your assignment and only pay for the nights you need. Be aware: Ideally your three 12’s will be on consecutive days but that is not always the case and can change during your assignment.
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Your travel assignment is across the country in an area where you want to visit and work but you are unfamiliar with housing opportunities. The safe option is to have the travel agency’s housing department secure corporate housing.
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Your travel assignment is a long way from home and you have accepted corporate housing for your initial 13 week assignment. However, you have worked out well with your assigned healthcare facility and they want to extend you for another 13 weeks. By this time you are more familiar with the area and the housing opportunities and you want to maximize the financial benefits of healthcare traveling so you might choose to accept the “per diem” and arrange for your own housing.
              </p>

            </li>

            <li>
              <p>
                <i className="fa fa-fw fa-check"></i>
                During your assignment you will meet other healthcare travelers. It is not unusual for healthcare travelers to share accommodations when they have similar assignments and it is a considerable cost savings when choosing the “per diem” option. Many healthcare travelers begin their assignments traveling with a friend or a significant other who also is a healthcare traveler. This option is dependent upon the availability of assignments.
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                Your travel assignment is close enough that you can go home during off days in your schedule. For example: If you are a RN and your schedule is three 12 hour shifts and your assignment is close enough to home to commute on your off days then it might make sense to accept the housing “per diem” and find your own accommodations. Research Extended Stay or Corporate Hotels near your assignment and only pay for the nights you need. Be aware: Ideally your three 12’s will be on consecutive days but that is not always the case and can change during your assignment.
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                If you are traveling with family be prepared to pay additional housing costs if you require multiple bedrooms. The travel agencies will work with you to find accommodations but will not pay the additional costs for family members.
              </p>
              <p>
                <i className="fa fa-fw fa-check"></i>
                If you travel with a pet, and many healthcare travelers do, the additional deposits are your responsibility and not paid for by the healthcare travel agencies.
              </p>
            </li>

          </ul>

          <p>
            Listed below are online resources for housing and general information about the area or city where your assignment is located. The HealthCare Employment Network is not connected with nor do we endorse the following resources. We are providing these online resources strictly for your convenience.
          </p>

          <p>
            <i className="fa fa-fw fa-check"></i>
            <a href="https://www.tripadvisor.com">www.tripadvisor.com</a> - Great resource for everything from local attractions to hotels.
          </p>
          <p>
            <i className="fa fa-fw fa-check"></i>
            <a href="https://www.travelershaven.com">www.travelershaven.com</a> - This website is dedicated to housing information for the traveling professional.
          </p>
          <p>
            <i className="fa fa-fw fa-check"></i>
            <a href="//www.oakwood.com">www.oakwood.com</a> - Oakwood is a national company that provides fully-furnished apartments, houses, suites for extended stay, temporary, or relocation accommodations as a hotel alternative.
          </p>
          <p>
            Regardless of the housing options you choose, the HealthCare Employment Network urges you to proceed with caution so that you feel safe in the accommodations you choose or the accommodations chosen for you by your healthcare travel agency. If you choose to have your healthcare travel agency provide housing and it is not what was described or you don’t feel safe in that location, communicate immediately with your agency recruiter.
          </p>
        </section>
      </div>

      <Explore/>

    </>
  )
}

export default TravelAccommodations;
