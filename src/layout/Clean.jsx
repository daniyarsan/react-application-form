import React from 'react'
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Top from "./_parts/Top.jsx";

function Clean() {

  return (
      <>
        <Outlet/>
        <ToastContainer/>
      </>
  )
}

export default Clean
