import React from 'react';
import { useState } from 'react';
import PersonalDetailsCVComponent from './PersonalDetailsCVComponent';
import App from './App';


export default function PersonalDetails({handleSubmit}) {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  return (
    <>
        <div className="personal-details-container">
          <h3>Personal Details:</h3>
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
                handleSubmit(
                  inputName,
                  inputEmail,
                  inputAddress,
                  inputPhone,
                )
              }
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
    </>
  );
}
