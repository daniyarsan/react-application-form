import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header() {

  return (
    <Navbar className='navbar navbar-expand-lg navbar-light osahan-nav-mid px-0 border-top shadow-sm' expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to='/'>Home</Link>
            {/*<Link className='nav-link' to='/jobs'>Search Jobs</Link>*/}
            <Link className='nav-link' to='/apply'>Apply</Link>

            <NavDropdown title="Healthcare Traveler">
              <Link to='/about/healthcare-traveler' className='dropdown-item'>Healthcare Traveler</Link>
              <Link to='/about/successful-healthcare-traveler' className='dropdown-item'>Successful Healthcare Traveler</Link>
              <Link to='/about/process' className='dropdown-item'>What is the process</Link>
              <Link to='/about/staffing-selection' className='dropdown-item'>Staffing Agency Selection</Link>
              <Link to='/about/recruiter-selection' className='dropdown-item'>Recruiter Selection</Link>
              <Link to='/about/travel-accommodations' className='dropdown-item'>Travel Accommodations</Link>
              <Link to='/about/faq' className='dropdown-item'>FAQ</Link>
            </NavDropdown>

            <NavDropdown title="Disciplines & Specialties">
              <Link to='/disciplines' className='dropdown-item'>Disciplines & Specialties</Link>
            </NavDropdown>

            <NavDropdown title="Destinations">
              <Link to='/disciplines' className='dropdown-item'>Disciplines & Specialties</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/apply' className="btn btn-outline-secondary btn-lg">
              <i className="fa fa-fw fa-trophy"></i>
              <span>MoreInfo</span></Link>
          </li>

        </ul>
      </Container>
    </Navbar>
  )
}

export default Header


