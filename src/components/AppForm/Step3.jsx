import React, {useEffect, useRef, useState} from 'react';
import {ErrorMessage, Field} from "formik";
import SelectField from "../UI/SelectField/SelectField.jsx";
import {getDisciplines, getStates} from "../../api/manager.js";
import DatepickerField from "../UI/DatepickerField/DatepickerField.jsx";

const Step3 = ({show, states, boolOptions, values, assignementTimeOptions, uploadButtonText, setUploadButtonText, inputRef, setFieldValue}) => {

  return (
    <div style={{display: show ? 'block' : 'none'}}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-check-circle position-absolute"></i>
              <Field component={SelectField} name="isExperiencedTraveler" placeholder='Experienced Traveler?' options={boolOptions} />
            </div>
            <ErrorMessage className="text-danger" name="isExperiencedTraveler" component="small"/>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-map-marker-circle position-absolute"></i>
              <Field isMulti component={SelectField} name="desiredAssignementState" placeholder='Desired Assignment State' options={states} />
            </div>
            <ErrorMessage className="text-danger" name="desiredAssignementState" component="small"/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-worker position-absolute"></i>
              <Field component={SelectField} name="isOnAssignement" placeholder='Is On Assignment?' options={boolOptions} />
            </div>
            <ErrorMessage className="text-danger" name="isOnAssignement" component="small"/>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-calendar position-absolute"></i>
              <Field component={DatepickerField} name="completion" placeholderText="Select date" disabled={!values.isOnAssignement} minDate={new Date()} />
            </div>
            <ErrorMessage className="text-danger" name="completion" component="small"/>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <div className="position-relative icon-form-control">
              <i className="mdi mdi-calendar-range position-absolute"></i>
              <Field component={SelectField} name="assignementTime" placeholder='Assignment Availability' options={assignementTimeOptions} />
            </div>
            <ErrorMessage className="text-danger" name="assignementTime" component="small"/>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <button type='button'
                    className='btn btn-primary btn-block'
                    onClick={() => {
                      inputRef.current?.click();
                    }}>
              <i className="mdi mdi-download"></i> {uploadButtonText ? uploadButtonText : 'Choose file'}</button>

            <input
              ref={inputRef}
              hidden
              type="file"
              onChange={(event) => {
                const currentFile = event.currentTarget.files[0]
                setUploadButtonText(currentFile?.name)
                setFieldValue('document', currentFile);
              }}
            />
            <ErrorMessage className="text-danger" name="document" component="small"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3
