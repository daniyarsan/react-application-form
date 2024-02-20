import React, {useState} from 'react';
import AppForm from "../components/AppForm/AppForm.jsx";
import {apply} from "../api/manager.js";
import {Preloader} from "../components/UI/Preloader/index.js";
import {toast} from "react-toastify";
import {Success} from "../components/UI/Success/index.js";

const FormPage = () => {


  return (
    <div className="container mb-5">
      <div className="mx-auto col-md-8 mt-5">
        <AppForm />
      </div>
    </div>
  )
}

export default FormPage
