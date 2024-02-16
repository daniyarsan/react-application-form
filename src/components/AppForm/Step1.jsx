import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field} from "formik";
import InputMask from "react-input-mask";
import SelectField from "../UI/SelectField/SelectField.jsx";

const Step1 = ({show, states, setFieldValue}) => {

  return (
    <div style={{display: show ? 'block' : 'none'}}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-account position-absolute"></i>
              <Field name="firstName" placeholder='First Name' className='form-control' type="text"/>
            </div>
            <ErrorMessage className="text-danger" name="firstName" component="small"/>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative">
              <Field name="lastName" placeholder="Last Name" className='form-control' type="text"/>
            </div>
            <ErrorMessage className="text-danger" name="lastName" component="small"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="js-form-message">
            <div className="form-group">
              <div className="position-relative icon-form-control">
                <i className="mdi mdi-email-outline position-absolute"></i>
                <Field name="email" placeholder='Email' className='form-control' type="text"/>
              </div>
              <ErrorMessage className="text-danger" name="email" component="small"/>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-phone position-absolute"></i>
              <Field name="phone">
                {
                  ({ field }) => <InputMask
                    {...field}
                    type="text"
                    mask="+1 999 999 9999"
                    placeholder="Phone"
                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("phone", value);
                    }}
                    className="form-control"
                  />
                }
              </Field>
            </div>
            <ErrorMessage className="text-danger" name="phone" component="small"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-map-marker position-absolute"></i>
              <Field component={SelectField} name="state" placeholder='Select Local State' options={states}/>
            </div>
            <ErrorMessage className="text-danger" name="state" component="small"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
