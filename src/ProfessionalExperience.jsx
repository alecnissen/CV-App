import React, { useState } from 'react'
import ProfessionalExperienceCVComponent from './ProfessionalExperienceCVComponent';

export default function ProfessionalExperience({ handleSubmit, experienceFormInput }) {
  const [inputJobTitle, setInputJobTitle] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');

  return (
    <>
      <div className="professional-experience-form-container">
        <h3>Professional Experience:</h3>
        <label>Job Title:</label>
        <input
          type="text"
          value={inputJobTitle}
          onChange={e => setInputJobTitle(e.target.value)}
        ></input>
        <label>Company:</label>
        <input
          type="text"
          value={inputCompany}
          onChange={e => setInputCompany(e.target.value)}
        ></input>
        <label>Description:</label>
        <textarea
          type="text"
          value={inputDescription}
          onChange={e => setInputDescription(e.target.value)}
        ></textarea>
        <label>Start Date:</label>
        <input
          type="date"
          value={inputStartDate}
          onChange={e => setInputStartDate(e.target.value)}
        ></input>
        <label>End Date:</label>
        <input
          type="date"
          value={inputEndDate}
          onChange={e => setInputEndDate(e.target.value)}
        ></input>
        <div className="professional-experience-btn-containers">
          <button
            onClick={() =>
              handleSubmit(
                inputJobTitle,
                inputCompany,
                inputDescription,
                inputStartDate,
                inputEndDate,
              )
            }
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="experience-form-content">
        <h3>{experienceFormInput.inputJobTitle}</h3>
        <h3>{experienceFormInput.inputCompany}</h3>
        <h3>{experienceFormInput.inputDescription}</h3>
        <h3>{experienceFormInput.inputStartDate}</h3>
        <h3>{experienceFormInput.inputEndDate}</h3>
      </div>
    </>
  );
}
