import React, { useState } from 'react' 

import EducationCVComponent from './EducationCVComponent';

import App from './App';



export default function Education({ handleSubmit, educationForm }) {
  const [schoolNameInput, setSchoolNameInput] = useState('');
  const [degreeInput, setDegreeInput] = useState('');
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [showedEducation, setShowedEducation] = useState(false); 

   function clearEducationInputs( ) {
    setSchoolNameInput(''); 
    setDegreeInput('');
    setStartDateInput(''); 
    setEndDateInput('');
    setLocationInput('');
    setShowedEducation('');
  } 

  return (
    <>
      <div className="education-input-container">
        <h3>Education:</h3>

        <div className="dropdown-icon-education">
          <img
            src="Icons/down-arrow.png"
            onClick={() => setShowedEducation(!showedEducation)}
          ></img>
        </div>

        <form
          className="hide-show-content-education-details"
          style={showedEducation ? { display: 'none' } : { display: 'flex' }}
          // onSubmit={e => clearEducationForm(e)}
        >
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
              onClick={e => {
                handleSubmit(
                  e,
                  schoolNameInput,
                  degreeInput,
                  startDateInput,
                  endDateInput,
                  locationInput,
                );
                clearEducationInputs();
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="education-form-content">
          {/* <h3>{educationForm.schoolNameInput}</h3>
          <h3>{educationForm.degreeInput}</h3>
          <h3>{educationForm.startDateInput}</h3>
          <h3>{educationForm.endDateInput}</h3>
          <h3>{educationForm.locationInput}</h3> */}
          {educationForm.map(item => {
            return (
              <div key={crypto.randomUUID()}>
                <h3>{item.schoolNameInput}</h3>
                <h3>{item.degreeInput}</h3>
                <h3>{item.startDateInput}</h3>
                <h3>{item.endDateInput}</h3>
                <h3>{item.locationInput}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
