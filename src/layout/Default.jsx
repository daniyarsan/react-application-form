import React from 'react'
import {Outlet} from "react-router-dom";
import Header from "./_parts/Header.jsx";
import Footer from "./_parts/Footer.jsx";
import {ToastContainer} from "react-toastify";
import Top from "./_parts/Top.jsx";

function Default() {

  return (
      <>
        <Top/>
        <Header/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
      </>
  )
}

export default Default
