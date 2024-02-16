import React from 'react'

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="footer-list">
            <h2>Categories</h2>
            <ul className="list">
              <li><a href="#">Graphics &amp; Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Writing &amp; Translation</a></li>
              <li><a href="#">Video &amp; Animation</a></li>
              <li><a href="#">Music &amp; Audio</a></li>
              <li><a href="#">Programming &amp; Tech</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div className="footer-list">
            <h2>About</h2>
            <ul className="list">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press &amp; News</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Intellectual Property Claims</a></li>
              <li><a href="#" target="_blank">Investor Relations</a></li>
            </ul>
          </div>
          <div className="footer-list">
            <h2>Support</h2>
            <ul className="list">
              <li><a href="#">Help &amp; Support</a></li>
              <li><a href="#">Trust &amp; Safety</a></li>
              <li><a href="#">Selling on Maer
              </a>
              </li>
              <li><a href="#">Buying on Maer
              </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h2>Community</h2>
            <ul className="list">
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Community Standards</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Invite a Friend</a></li>
              <li><a href="#">Become a Seller</a></li>
              <li><a href="#">Maer
                Elevate<small>Exclusive Benefits</small></a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h2>More From Maer</h2>
            <ul className="list">
              <li><a href="#">Maer
                Pro</a>
              </li>
              <li><a href="#">Maer
                Studios</a>
              </li>
              <li><a href="#">Maer
                Logo Maker</a>
              </li>
              <li><a href="#">Get Inspired</a></li>
              <li><a href="#">ClearVoice<small>Content Marketing</small></a></li>
              <li><a href="#">AND CO<small>Invoice Software</small></a></li>
              <li><a href="#">Learn<small>Online Courses</small></a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo.svg" />
            </a>
          </div>
          <p>© Copyright 2020 Maer. All Rights Reserved
          </p>
          <ul className="social">
            <li>
              <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
