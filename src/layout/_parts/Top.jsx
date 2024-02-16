import React from 'react'

import logo from '../../assets/img/logo.png'
import {Link} from "react-router-dom";
function Top() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light topbar static-top shadow-sm bg-white osahan-nav-top px-0">
      <div className="container">
        <Link className='navbar-brand' to='/'><img src={logo} /></Link>
      </div>
    </nav>

)
}

export default Top
