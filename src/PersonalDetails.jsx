import React from 'react';
import { useState } from 'react';
import PersonalDetailsCVComponent from './PersonalDetailsCVComponent';
import App from './App';


export default function PersonalDetails({ handleSubmit, personalDetailsFormInput }) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputPhone, setInputPhone] = useState(''); 
  const [showed, setShowed] = useState(false);

  return (
    <>
      <div className="personal-details-container">
        <h3>Personal Details:</h3>
        <div className="dropdown-icon-personal-details">
          <img src="Icons/down-arrow.png" onClick={() => setShowed(!showed)}></img>
        </div>

        <div className='hide-show-content-personal-details' style={showed ? {display: "none"} : {display: "flex"}}>

          <label>Full Name: </label>
          <input
            type="text"
            onChange={e => setInputName(e.target.value)}
          ></input>
          <label>E-Mail:</label>
          <input
            type="text"
            onChange={e => setInputEmail(e.target.value)}
          ></input>
          <label>Address: </label>
          <input
            type="text"
            onChange={e => setInputAddress(e.target.value)}
          ></input>
          <label>Phone Number:</label>
          <input
            type="text"
            onChange={e => setInputPhone(e.target.value)}
          ></input>
          <div className="personal-details-btn-container">
            <button
              onClick={() =>
                handleSubmit(inputName, inputEmail, inputAddress, inputPhone)
              }
              type="submit"
            >
              Submit
            </button>
            <button>Save</button>
          </div>


        </div>

        <div className="personal-details-form-content">
          <h3>{personalDetailsFormInput.inputName}</h3>
          <h3>{personalDetailsFormInput.inputEmail}</h3>
          <h3>{personalDetailsFormInput.inputAddress}</h3>
          <h3>{personalDetailsFormInput.inputPhone}</h3>
        </div>
      </div>
    </>
  );
}