import React from 'react';
import './success.css'

export const Success = () => {
  return (
    <div className="shadow-sm rounded bg-white p-3">
      <div className="congratulation-area text-center mt-5">
        <div className="congratulation-contents center-text">
          <div className="congratulation-contents-icon">
            <i className="fa fa-check"></i>
          </div>
          <h4 className="congratulation-contents-title"> Congratulations!</h4>
          <p className="congratulation-contents-para">You are on the way to the great success!</p>
          <a className="btn btn-outline-secondary btn-lg" href="/apply">
            <i className="fa fa-fw fa-trophy"></i><span>Get More Jobs</span>
          </a>
        </div>
      </div>
    </div>
  )
};

