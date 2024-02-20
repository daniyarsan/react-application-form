import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

import './assets/vendor/icons/css/materialdesignicons.min.css'
import './assets/vendor/fontawesome/css/font-awesome.min.css'

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/style.css'
import "./assets/vendor/jquery/jquery.min"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)



