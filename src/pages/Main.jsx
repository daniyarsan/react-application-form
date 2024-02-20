import React from 'react';
import Trusted from "../components/Homepage/Trusted.jsx";
import {Link} from "react-router-dom";

export const Main = props => {

  return (
    <>
      <section className="py-5 homepage-search-block text-center homepage-search-block-2 bg-dark position-relative">
        <div className="container">
          <div className="row py-lg-5">
            <div className="col-lg-6 mx-auto">
              <div className="homepage-search-title">
                <h1 className="mb-3 text-shadow text-white font-weight-bold">What’s Different at HCEN?</h1>
                <h6 className="mb-5 text-shadow text-white font-weight-normal">
                  For the past 10 years, thousands of HealthCare Professionals just like you have utilized the sites of
                  HealthCare Employment Network to explore a career as a "HealthCare Traveler"
                </h6>
              </div>

              <div className="homepage-search-form">
                <form className="form-noborder">
                  <div className="form-row">

                    <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                      <div className="location-dropdown text-left">
                        <i className="icofont-location-arrow"></i>
                        <select className="custom-select form-control border-0 shadow-sm form-control-lg">
                          <option> All</option>
                          <option> Graphics & Design</option>
                          <option> Digital Marketing</option>
                          <option> Writing & Translation</option>
                          <option> Video & Animation</option>
                          <option> Music & Audio</option>
                          <option> Programming & Tech</option>
                          <option> Business</option>
                          <option> Lifestyle</option>
                          <option> Industries</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" placeholder="Find Opportunities..."
                             className="form-control border-0 form-control-lg shadow-sm"/>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                      <button type="submit" className="btn btn-success btn-block btn-lg btn-gradient shadow-sm"><i
                        className="fa fa-search"></i></button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
            <div className="col-lg-4 mx-auto">
              <div className="homepage-search-title">
                <h1 className="mb-3 text-shadow text-white font-weight-bold">Apply Now</h1>
              </div>

              <h6 className="mb-3 mt-1 text-shadow text-center text-white font-weight-normal">Top agencies, top
                opportunities...</h6>

              <div className="homepage-search-form">
                <form className="form-noborder">
                  <div className="form-row">
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <Link to='/apply' type="submit" className="btn btn-success btn-block btn-lg">More Info</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="container">
        <div className="about-section py-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4>
                Veteran Traveler or researching your first assignment options, You are in the right place. Where would
                you like to go?
              </h4>
              <hr/>
              <p>Spend the winter in the warmth of Florida, Virgin Islands, Arizona, Hawaii, Southern California or many
                others.
                Spend the winter in the beautiful states of Colorado, Utah, Vermont.
                So many great options today's travel nurse has to choose from
                ASAP starts. Numerous 8, 13 & 26 week nationwide travel assignments available
              </p>
              <p>
                If you are seeking Healthcare Travel Opportunities but are overwhelmed with the seemingly endless number
                of
                Healthcare Travel Agencies and unsure which of those companies is your best option, then the HealthCare
                Employment Network is your solution! We work with the country’s top Healthcare Travel Agencies and you
                can
                reach all of our clients by completing a application with the HealthCare Employment Network!
              </p>

              <p>
                Completing a HealthCare Traveler More Information Request Form gives you access to the top Healthcare
                Traveling Agencies in the country! There is no charge or obligation to you and your information is only
                shared with our HealthCare Travel Company Clients! Choose one of the disciplines below to complete your
                request
              </p>
            </div>

            <div className="col-md-4">
              <h4>
                Start Application:
              </h4>
              <hr/>

              <form action="index.html">
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label className="mb-1">First name</label>
                      <div className="position-relative icon-form-control">
                        <i className="mdi mdi-account position-absolute"></i>
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label className="mb-1">Last name</label>
                      <div className="position-relative">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label className="mb-1">Email</label>
                      <div className="position-relative icon-form-control">
                        <i className="mdi mdi-email-outline position-absolute"></i>
                        <input type="email" className="form-control"/>
                      </div>
                    </div>
                  </div>


                  <div className="col">
                    <div className="form-group">
                      <label className="mb-1">Phone</label>
                      <div className="position-relative icon-form-control">
                        <i className="mdi mdi-phone position-absolute"></i>
                        <input type="phone" className="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="mb-1">Home state</label>
                  <div className="position-relative icon-form-control">
                    <i className="mdi mdi-map-marker position-absolute"></i>
                    <select type="password" className="form-control">
                      <option value="1">1</option>
                      <option value="1">2</option>
                    </select>
                  </div>
                </div>

                <button className="btn btn-success btn-block text-uppercase" type="submit">Proceed to Apply <i className='mdi mdi-arrow-right-bold'></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>




      <div className="services-wrapper bg-white py-5">
        <div className="container">
          <h2>Popular Professional Services</h2>
          <div className="row service-slider">
            <div className="col">
              <div className="service">
                <img src="images/service-01.jpg" />
                  <h3><span>Build Your Brand</span> Logo Design</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-02.jpg" />
                  <h3><span>Customize your site</span> wordpress</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-03.jpg" />
                  <h3><span>share your message</span> voice over</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-04.jpg" />
                  <h3><span>engage your audience</span> whiteboard</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-05.jpg" />
                  <h3><span>reach more customers</span> social media</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-01.jpg" />
                  <h3><span>Build Your Brand</span> Logo Design</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-02.jpg" />
                  <h3><span>Customize your site</span> wordpress</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-03.jpg" />
                  <h3><span>share your message</span> voice over</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-04.jpg" />
                  <h3><span>engage your audience</span> whiteboard</h3>
              </div>
            </div>
            <div className="col">
              <div className="service">
                <img src="images/service-05.jpg" />
                  <h3><span>reach more customers</span> social media</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Trusted />

      <div className="market-wrapper py-5 bg-white">
        <div className="container">
          <h2 className="text-center">Explore the marketplace</h2>
          <ul className="categories-list mb-0">
            <li>
              <a href="#">
                <img src="images/graphics.svg" alt loading="lazy" />Graphics &amp; Design
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/online-marketing.svg" alt="Digital Marketing" loading="lazy" />Digital Marketing
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/writing-translation.svg" alt="Writing &amp; Translation" loading="lazy" />Writing
                  &amp; Translation
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/video-animation.svg" alt="Video &amp; Animation" loading="lazy" />Video &amp;
                  Animation
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/music-audio.svg" alt="Music &amp; Audio" loading="lazy" />Music &amp; Audio</a>
            </li>
            <li>
              <a href="#">
                <img src="images/programming.svg" alt="Programming &amp; Tech" loading="lazy" />Programming &amp; Tech
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/business.svg" alt="Business" loading="lazy" />Business</a>
            </li>
            <li>
              <a href="#">
                <img src="images/lifestyle.svg" alt="Lifestyle" loading="lazy" />Lifestyle
              </a>
            </li>
          </ul>
        </div>
      </div>

    </>

  )
}


