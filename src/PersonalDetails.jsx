import React from 'react'
import { useState } from 'react';
import Test from './Test';

// should personal details be wrapped in a form tag instead of in app ? 

export default function PersonalDetails() {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputAddress, setInputAddress] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    console.log(inputName);
    console.log(inputEmail);
    console.log(inputAddress);
    console.log(inputPhone);

    // function handleSubmit(e) { 
    //   e.preventDefault();

    //   // <Test
    //   //   inputName={inputName}
    //   //   inputEmail={inputEmail}
    //   //   inputAddress={inputAddress}
    //   //   inputPhone={inputPhone}
    //   // ></Test>;
    // }



  return (
    <>
      <form className="personal-details-form" >
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
            <button type='submit'>Submit</button>
            <button>Edit</button>
          </div>
        </div>
      </form>
      <Test inputName={inputName} inputEmail={inputEmail} inputAddress={inputAddress} inputPhone={inputPhone} ></Test>
    </>
  );
}
