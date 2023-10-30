import React, { useState } from 'react' 

import EducationCVComponent from './EducationCVComponent';

import App from './App';

export default function Education() { 

// const [educationFormInput, setEducationFormInput] = useState("");

const [schoolNameInput, setSchoolNameInput] = useState("");
const [degreeInput, setDegreeInput] = useState("");
const [startDateInput, setStartDateInput] = useState("");
const [endDateInput, setEndDateInput] = useState("");
const [locationInput, setLocationInput] = useState("");

// call function here, on submit, it will pass the props to the educationCVComponent 

// function handleSubmit(e) { 
//   e.preventDefault();
//   setSchoolNameInputProps(schoolNameInput);
//   setDegreeInputProps(degreeInput);
//   setStartDateInputProps(startDateInput);
//   setEndDateInputProps(endDateInput);
//   setLocationInputProps(locationInput);

// } 


  return (
    <>
      <form className="form-container">
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
            <button
              onClick={() =>
                handleSubmitEducation(
                  schoolNameInput,
                  degreeInput,
                  startDateInput,
                  endDateInput,
                  locationInput,
                )
              }
              type="submit"
            >
              Submit
            </button>
          </div>

          {/* <div>
            <h3>{schoolNameInput}</h3>
            <h3>{degreeInput}</h3>
            <h3>{startDateInput}</h3>
            <h3>{endDateInput}</h3>
            <h3>{locationInput}</h3>
          </div> */}
        </div>
      </form>
      {/* <EducationCVComponent
        schoolNameInput={schoolNameInputProps}
        degreeInput={degreeInputProps}
        startDateInput={startDateInputProps}
        endDateInput={endDateInputProps}
        locationInput={locationInputProps}
      ></EducationCVComponent> */}
    </>
  );
}
