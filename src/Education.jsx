import React, { useState } from 'react' 

import EducationCVComponent from './EducationCVComponent';

export default function Education() {

const [schoolNameInput, setSchoolNameInput] = useState("");
const [degreeInput, setDegreeInput] = useState("");
const [startDateInput, setStartDateInput] = useState("");
const [endDateInput, setEndDateInput] = useState("");
const [locationInput, setLocationInput] = useState("");

// call function here, on submit, it will pass the props to the educationCVComponent 


  return (
    <>
      <form className='form-container'>
        <div className="education-input-container">
          <h3>Education:</h3>
          <label>School Name:</label>
          <input
            type="text"
            value={schoolNameInput}
            onChange={e => setSchoolNameInput(e.target.value)}
          ></input>
          <label>Degree:</label>
          <input
            type="text"
            value={degreeInput}
            onChange={e => setDegreeInput(e.target.value)}
          ></input>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDateInput}
            onChange={e => setStartDateInput(e.target.value)}
          ></input>
          <label>End Date:</label>
          <input
            type="date"
            value={endDateInput}
            onChange={e => setEndDateInput(e.target.value)}
          ></input>
          <label>Location:</label>
          <input
            type="text"
            value={locationInput}
            onChange={e => setLocationInput(e.target.value)}
          ></input>
          <div className="education-btns-container">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
