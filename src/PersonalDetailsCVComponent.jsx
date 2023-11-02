/* eslint-disable react/prop-types */
import React from 'react'

import PersonalDetails from './PersonalDetails';

import App from './App';

export default function PersonalDetailsCVComponent({ personalDetailsForm }) {
  return (
    <>
      <div className="personal-details-CV-component-container">
        <h3>{personalDetailsForm.inputName}</h3>
        <h3>{personalDetailsForm.inputEmail}</h3>
        <h3>{personalDetailsForm.inputAddress}</h3>
        <h3>{personalDetailsForm.inputPhone}</h3>
      </div>
    </>
  );
}
