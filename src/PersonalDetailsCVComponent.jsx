/* eslint-disable react/prop-types */
import React from 'react'

import PersonalDetails from './PersonalDetails';

import App from './App';

export default function PersonalDetailsCVComponent({ personalDetailsForm }) {

  return ( 
  
  <> 
    <div className='personal-details-CV-component-container'> 
    {personalDetailsForm.map(item => { 
      return <>
      <h3 key={item.keyCV}>{item.inputName}</h3><div className='email-address-container-personal-details'>
        <p>{item.inputEmail}</p>
        <p>{item.inputAddress}</p>
        <p>{item.inputPhone}</p>
      </div>
      </>
    })}
    </div>
  
    </>
  ) 
  
}
