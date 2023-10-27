/* eslint-disable react/prop-types */
import React from 'react'

import PersonalDetails from './PersonalDetails';

export default function HeaderCVComponent(props) {
   // const { inputName, inputEmail, inputAddress, inputPhone } = personalInfo;
  return (
    <>
      <div className="CV-component-container">
        <h3>{props.personalInfo.inputName}</h3>
        <h3>{props.personalInfo.inputEmail}</h3>
        <h3>{props.personalInfo.inputAddress}</h3>
        <h3>{props.personalInfo.inputPhone}</h3>
      </div>
    </>
  );
}
