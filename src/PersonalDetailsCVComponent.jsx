/* eslint-disable react/prop-types */
import React from 'react'

import PersonalDetails from './PersonalDetails';

import App from './App';

export default function PersonalDetailsCVComponent({ personalDetailsForm }) {
  return (
    <>
      <div className="personal-details-CV-component-container">
        {/* <div className="personal-details-name-header-container"> */}
        <h3>{personalDetailsForm.inputName}</h3>
        {/* </div> */}

        <div className="email-address-container-personal-details">
          <p>{personalDetailsForm.inputEmail}</p>
          <p>{personalDetailsForm.inputAddress}</p>
          <p>{personalDetailsForm.inputPhone}</p>
        </div>

      </div>
    </>
  );
}
