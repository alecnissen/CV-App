import React, { useState } from 'react' 

import EducationCVComponent from './EducationCVComponent';

import App from './App';

export default function Education({ handleSubmit, educationFormInput }) {
  const [schoolNameInput, setSchoolNameInput] = useState('');
  const [degreeInput, setDegreeInput] = useState('');
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  return (
    <>
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
              handleSubmit(
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
      </div>

      <div className="education-form-content">
        <h3>{educationFormInput.schoolNameInput}</h3>
        <h3>{educationFormInput.degreeInput}</h3>
        <h3>{educationFormInput.startDateInput}</h3>
        <h3>{educationFormInput.endDateInput}</h3>
        <h3>{educationFormInput.locationInput}</h3>
      </div>
    </>
  );
}
