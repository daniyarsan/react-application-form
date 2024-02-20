import React, {useEffect, useRef, useState} from 'react';
import {Form, Formik} from "formik";
import {object, string, bool, array} from "yup";
import {apply, getDisciplines, getSpecialties, getStates} from "../../api/manager.js";
import banner1 from "../../assets/img/banners/banner1.jpg"
import banner2 from "../../assets/img/banners/banner2.jpg"
import banner3 from "../../assets/img/banners/banner3.jpg"
import {toast} from "react-toastify";
import {Success} from "../UI/Success/index.js";
import {Preloader} from "../UI/Preloader/index.js";
import Time from "../../service/Time.js";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";

const AppForm = () => {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const inputRef = useRef(null);
  const [uploadButtonText, setUploadButtonText] = useState(false)
  const [states, setStates] = useState([])
  const [disciplines, setDisciplines] = useState([])
  const [specialties, setSpecialties] = useState([])
  const [experienceYearOptions, setExperienceYearOptions] = useState([])
  const [boolOptions, setBoolOptions] = useState([])
  const [assignementTimeOptions, setAssignementTimeOptions] = useState([])
  const [page, setPage] = useState(0);
  const isLastPage = page === 2

  useEffect(() => {
    getDisciplines().then(({data}) => {
      setDisciplines(data.map(item => ({value: item.id, label: item.name})))
    })

    getStates().then(({data}) => {
      setStates(data.map(item => ({value: item.short, label: item.name})))
    })

    setExperienceYearOptions([
      {value: 0, label: 'New grad (2yrs exp required)'},
      {value: 1, label: '0-1 Year (2yrs exp required)'},
      {value: 2, label: '1-3 Years'},
      {value: 3, label: '3-5 Years'},
      {value: 4, label: '5-10 Years'},
      {value: 5, label: '10-15 Years'},
      {value: 6, label: '20+ Years'},
    ])

    setBoolOptions([
      {value: false, label: 'No'},
      {value: true, label: 'Yes'}
    ])

    setAssignementTimeOptions([
      {value: 0, label: 'ASAP'},
      {value: 1, label: '1-3 Months'},
      {value: 2, label: '3-6 Months'},
      {value: 3, label: 'Undecided'}
    ])
  }, [])

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    discipline: '',
    specialtyPrimary: '',
    yearsLicenceSp: '',
    specialtySecondary: false,
    yearsLicenceSs: '',
    licenseState: [],
    desiredAssignementState: [],
    isExperiencedTraveler: null,
    isOnAssignement: null,
    assignementTime: '',
    completion: '',
    document: null,
  }

  const Step1Schema = object({
    firstName: string().required('Required'),
    lastName: string().required('Required'),
    email: string().required('Required').email('Invalid email'),
    phone: string().test("len", "Invalid Phone format", (val) => !val.includes('_')).required('Required'),
    state: string().required('Required'),
  })

  const Step2Schema = object({
    discipline: string().required('Required'),
    licenseState: array().max(3, "Max 3 states are allowed").min(1, 'Please choose at least one state'),
    specialtyPrimary: string().required('Required'),
    yearsLicenceSp: string().required('Required')
  })

  const Step3Schema = object({
    desiredAssignementState: array().max(3, "Max 3 states are allowed").min(1, 'Please choose at least one state'),
    isExperiencedTraveler: bool().required('Required'),
    isOnAssignement: bool().required('Required'),
    assignementTime: string().required('Required')
  })

  const schemaArray = [Step1Schema, Step2Schema, Step3Schema]

  const next = () => {
    setPage(Math.min(page + 1, 2))
  }
  const previous = () => {
    setPage(Math.max(page - 1, 0))
  }

  const handleSubmit = (data, formikHelpers) => {
    if (!isLastPage) {
      next()
    } else {
      setLoading(true)
      const formData = new FormData()
      formData.append('firstName', data.firstName)
      formData.append('lastName', data.lastName)
      formData.append('email', data.email)
      formData.append('personalInformation[phone]', data.phone)
      formData.append('personalInformation[state]', data.state)
      formData.append('personalInformation[discipline]', data.discipline)
      if (data.licenseState.length > 0) {
        data.licenseState.map((licenseState, index) => {
          formData.append(`personalInformation[licenseState][${index}]`, licenseState.value)
        })
      }
      if (data.desiredAssignementState.length > 0) {
        data.desiredAssignementState.map((desiredAssignementState, index) => {
          formData.append(`personalInformation[desiredAssignementState][${index}]`, desiredAssignementState.value)
        })
      }
      formData.append('personalInformation[specialtyPrimary]', data.specialtyPrimary)
      formData.append('personalInformation[yearsLicenceSp]', data.yearsLicenceSp)
      if (data.specialtySecondary) {
        formData.append('personalInformation[specialtySecondary]', data.specialtySecondary)
        formData.append('personalInformation[yearsLicenceSs]', data.yearsLicenceSs)
      }
      formData.append('personalInformation[isExperiencedTraveler]', data.isExperiencedTraveler ? 1 : 0)
      formData.append('personalInformation[isOnAssignement]', data.isOnAssignement ? 1 : 0)
      formData.append('personalInformation[assignementTime]', data.assignementTime)
      if (data.completion) {
        formData.append('personalInformation[completion]', (new Time(data.completion)).formattedTime())
      }
      if (data.document) {
        formData.append('document', data.document)
      }

      apply(formData).then((resp) => {
        setLoading(false)
        setDone(true)
        // formikHelpers.resetForm()
      }).catch(({response}) => {
        setLoading(false)
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        })
      })
    }
  }
  if (done) {
    return <Success />
  }

  const arrayProgress = [
    {
      title: "Certificate Request",
      description: "Your company details & certificate options"
    },
    {
      title: "Domain Verification",
      description: "Show you have control of your domain"
    },
    {
      title: "Complete",
      description: "Process complete & next steps"
    }
  ]

  return (
    <div className="shadow-sm rounded bg-white p-3">
      <div className="  relative">
        { loading && <Preloader /> }

        <Formik initialValues={initialValues}
                validationSchema={schemaArray[page]}
                onSubmit={handleSubmit}>
          {({values, setFieldValue, validateField, validateForm,  setFieldTouched, setValues, isValid, dirty, errors, touched, handleSubmit}) => {

            useEffect(() => {
              setSpecialties([])
              setFieldValue('specialtyPrimary', '');

              getSpecialties(values.discipline).then(({data}) => {
                if (Array.isArray(data)) {
                  setSpecialties(data.map(item => ({value: item.id, label: item.name})))
                }
              })
            }, [values.discipline]);

            return <Form onSubmit={handleSubmit}>
              <div className='appform'>
                <div className="appform-header">
                  <div className="row">
                    <div className="col-md-12 text-center"><img style={{height: '130px'}} src={banner1} alt=""/></div>
                    <div className="col-md-6 text-center"><img style={{height: '130px'}} src={banner2} alt=""/></div>
                    <div className="col-md-6 text-center"><img style={{height: '130px'}} src={banner3} alt=""/></div>
                  </div>
                </div>

                <div className="appform-body p-3">
                  <Step1 show={page===0} {...{states, setFieldValue}} />
                  <Step2 show={page===1} {...{disciplines, states, specialties, experienceYearOptions}} />
                  <Step3  show={page===2} {...{states, boolOptions, values, assignementTimeOptions, uploadButtonText, setUploadButtonText, inputRef, setFieldValue}} />

                  <div className="row row-cols-md-3 mt-3">
                    <div className="">
                      {page > 0 && (
                        <button onClick={() => {previous()}} type='button' className="btn btn-lg btn-success" ><i className='fa fa-arrow-left'></i> Prev</button>
                      )}
                    </div>

                    <div className=""></div>

                    <div className="text-right">
                      {!isLastPage && <button type='submit' className="btn btn-lg btn-success">Next <i className='fa fa-arrow-right'></i></button>}
                      {isLastPage && (
                        <button type="submit" className="btn btn-lg btn-success"><i className='fa fa-envelope' style={{marginRight: '10px'}}></i> Submit</button>
                      )}
                    </div>
                  </div>
                </div>

                <div className='footer col-sm-12'>
                  <p>We value your
                    <a target="_blank" href="http://healthcaretravelers.com/jobboard/privacy/">privacy</a>. By submitting this form, you agree to our <a target="_blank" href="http://healthcaretravelers.com/jobboard/terms-of-use/">Terms of Service</a>, <a target="_blank" href="http://healthcaretravelers.com/jobboard/privacy/">TCPA Consent &amp;Privacy</a>
                  </p>
                </div>
              </div>

            </Form>
          }}
        </Formik>
      </div>
    </div>

  )
}

export default AppForm;
