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
        {/* <br></br> */}
        <input
          type="text"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
        ></input>
        {/* <br></br> */}
        <label>E-Mail:</label>
        {/* <br></br> */}
        <input type="text"></input>
        {/* <br></br> */}
        <label>Address: </label>
        {/* <br></br> */}
        <input type="text"></input>
        {/* <br></br> */}
        <label>Phone Number:</label>
        {/* <br></br> */}
        <input type="text"></input>
      </div>
      <button>Submit</button>
      <button>Edit</button>
      <Test inputName={inputName}></Test>
    </>
  );
}
