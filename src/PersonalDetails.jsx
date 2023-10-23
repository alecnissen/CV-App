import React from 'react'
import { useState } from 'react';
import Test from './Test';

// should personal details be wrapped in a form tag instead of in app ? 

export default function PersonalDetails() {
    const [inputName, setInputName] = useState("");

  return (
    <>
      <div className="personal-details-container">
        <h3>Personal Details:</h3>
        <label>Full Name: </label>
        <input
          type="text"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
        ></input>
        <label>E-Mail:</label>
        <input type="text"></input>
        <label>Address: </label>
        <input type="text"></input>
        <label>Phone Number:</label>
        <input type="text"></input>
        <div className="personal-details-btn-container">
          <button>Submit</button>
          <button>Edit</button>
        </div>
      </div>
      <Test inputName={inputName}></Test>
    </>
  );
}
