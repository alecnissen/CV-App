import React from 'react'

// should personal details be wrapped in a form tag instead of in app ? 

export default function PersonalDetails() {
  return (
    <>
      <div className="container">
        <h3>Personal Details</h3>
        <label>Full Name: </label>
        <br></br>
        <input type={Text}></input>
        <br></br>
        <label>E-Mail:</label>
        <br></br>
        <input type={Text}></input>
        <br></br>
        <label>Address: </label>
        <br></br>
        <input type={Text}></input>
        <br></br>
        <label>Phone Number:</label>
        <br></br>
        <input type={Text}></input>
      </div>
    </>
  );
}
