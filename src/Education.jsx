import React from 'react'

export default function Education() {
  return (
    <>
      <div className="education-form-container">
        <h3>Education:</h3>
        <label>School Name:</label>
        <input></input>
        <label>Degree:</label>
        <input></input>
        <label>Start Date:</label>
        <input type="date"></input>
        <label>End Date:</label>
        <input type="date"></input>
        <label>Location:</label>
        <input></input>
        <div className="education-btns-container">
          <button>Submit</button>
          <button>Edit</button>
        </div>
      </div>
    </>
  );
}
