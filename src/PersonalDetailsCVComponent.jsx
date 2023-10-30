/* eslint-disable react/prop-types */
import React from 'react'

import PersonalDetails from './PersonalDetails';

import App from './App';

export default function PersonalDetailsCVComponent({ personalDetailsFormInput }) {
  return (
    <>
      <div className="CV-component-container">
        <h3>{personalDetailsFormInput.inputName}</h3>
        <h3>{personalDetailsFormInput.inputEmail}</h3>
        <h3>{personalDetailsFormInput.inputAddress}</h3>
        <h3>{personalDetailsFormInput.inputPhone}</h3>
      </div>
    </>
  );
}
