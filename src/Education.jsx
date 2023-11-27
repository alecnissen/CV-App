import React, { useState } from 'react' 
import EducationCVComponent from './EducationCVComponent';
import App from './App';
import dropdownImg from '../Icons/down-arrow.png';

export default function Education({ handleSubmit, educationForm, setEducationForm }) {

  const [schoolNameInput, setSchoolNameInput] = useState('');
  const [degreeInput, setDegreeInput] = useState('');
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [keyForm, setKeyForm] = useState('');

  const [showedEducation, setShowedEducation] = useState(false);

  function clearEducationInputs() {
    setSchoolNameInput('');
    setDegreeInput('');
    setStartDateInput('');
    setEndDateInput('');
    setLocationInput('');
    setShowedEducation('');
  }

  function handleEdit(item) {

      setSchoolNameInput(item.schoolNameInput);
      setDegreeInput(item.degreeInput);
      setStartDateInput(item.startDateInput);
      setEndDateInput(item.endDateInput);
      setLocationInput(item.locationInput);
      setKeyForm(item.keyForm);
      setShowedEducation(showedEducation);

  } 

  function handleDelete(e) {
    let clickedOnEntry = e.target.name;

    setEducationForm(
      educationForm.filter(item => item.keyForm !== clickedOnEntry),
    );
  }

  return (
    <>
      <div className="education-input-container">
        <h3>Education:</h3>

        <div className="dropdown-icon-education">
          <img
            src={dropdownImg}
            onClick={() => setShowedEducation(!showedEducation)}
          ></img>
        </div>

        <form
          className="hide-show-content-education-details"
          style={showedEducation ? { display: 'none' } : { display: 'flex' }}
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
          {educationForm.map(item => {
            return (
              <div key={item.keyForm} className="education-content-below-form">
                <h3>{item.schoolNameInput}</h3>
                <h3>{item.locationInput}</h3>
                <h3>
                  {item.startDateInput} - {item.endDateInput}
                </h3>
                <h3>{item.degreeInput}</h3>

                <div className="education-btns-container-below-form">
                  <button
                    onClick={e => {
                      setShowedEducation(!showedEducation);
                      handleEdit(item);
                      handleDelete(e);
                    }}
                    name={item.keyForm}
                  >
                    Edit
                  </button>
                  <button
                    onClick={e => {
                      handleDelete(e);
                    }}
                    name={item.keyForm}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
