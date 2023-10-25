import React from 'react'
import { useState } from 'react';
import HeaderCVComponent from './HeaderCVComponent';
import Test from './Test';

export default function PersonalDetails() {
    const [inputName, setInputName] = useState("");
    const [inputNameProps, setInputNameProps] = useState('');
    const [inputEmail, setInputEmail] = useState(""); 
    const [inputEmailProps, setInputEmailProps] = useState('');
    const [inputAddress, setInputAddress] = useState("");
    const [inputAddressProps, setInputAddressProps] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputPhoneProps, setInputPhoneProps] = useState("");

    function handleSubmit(e) { 
      e.preventDefault();

      setInputNameProps(inputName);

      setInputEmailProps(inputEmail);

      setInputAddressProps(inputAddress);

      setInputPhoneProps(inputPhone);


        // <HeaderCVComponent
        //   inputName={inputName}
        //   inputEmail={inputEmail}
        //   inputAddress={inputAddress}
        //   inputPhone={inputPhone}
        // ></HeaderCVComponent>;
    }

  return (
    <>
      <form className="personal-details-form">
        <div className="personal-details-container">
          <h3>Personal Details:</h3>
          <label>Full Name: </label>
          <input
            type="text"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          ></input>
          <label>E-Mail:</label>
          <input
            type="text"
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
          ></input>
          <label>Address: </label>
          <input
            type="text"
            value={inputAddress}
            onChange={e => setInputAddress(e.target.value)}
          ></input>
          <label>Phone Number:</label>
          <input
            type="text"
            value={inputPhone}
            onChange={e => setInputPhone(e.target.value)}
          ></input>
          <div className="personal-details-btn-container">
            <button onClick={handleSubmit} type="submit">Submit</button>
            {/* <button>Edit</button> */}
          </div>
        </div>
      </form>
    <HeaderCVComponent 
    inputName={inputNameProps}
    inputEmail={inputEmailProps}
    inputAddress={inputAddressProps}
    inputPhone={inputPhoneProps}
    ></HeaderCVComponent>
    </>
  );
}
