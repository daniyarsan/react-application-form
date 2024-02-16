import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field} from "formik";
import SelectField from "../UI/SelectField/SelectField.jsx";
import {getDisciplines, getStates} from "../../api/manager.js";

const Step2 = ({show, disciplines, states, specialties, experienceYearOptions}) => {

  return (
    <div style={{display: show ? 'block' : 'none'}}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-briefcase position-absolute"></i>
              <Field component={SelectField} name="discipline" placeholder='Select Discipline'   options={disciplines}  />
            </div>
            <ErrorMessage className="text-danger" name="discipline" component="small"/>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-map-marker-circle position-absolute"></i>
              <Field isMulti component={SelectField} name="licenseState" placeholder='Select License State' options={states} />
            </div>
            <ErrorMessage className="text-danger" name="licenseState" component="small"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-file-document position-absolute"></i>
              <Field component={SelectField} name="specialtyPrimary" placeholder='Select Specialty Primary' options={specialties} />
            </div>
            <ErrorMessage className="text-danger" name="specialtyPrimary" component="small"/>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-calendar position-absolute"></i>
              <Field component={SelectField} name="yearsLicenceSp" placeholder='Specialty Exp. Years' options={experienceYearOptions} />
            </div>
            <ErrorMessage className="text-danger" name="yearsLicenceSp" component="small"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-file-document position-absolute"></i>
              <Field component={SelectField} name="specialtySecondary" placeholder='Select Specialty Secondary' options={specialties} />
            </div>
            <ErrorMessage className="text-danger" name="specialtySecondary" component="small"/>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-calendar position-absolute"></i>
              <Field component={SelectField} name="yearsLicenceSs" placeholder='Secondary Specialty Exp. Years' options={experienceYearOptions} />
            </div>
          </div>
          <ErrorMessage className="text-danger" name="yearsLicenceSs" component="small"/>
        </div>
      </div>
    </div>
  );
};

export default Step2
