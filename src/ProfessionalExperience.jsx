import React, { useState } from 'react'
import ProfessionalExperienceCVComponent from './ProfessionalExperienceCVComponent';

export default function ProfessionalExperience() { 

  const [inputJobTitle, setInputJobTitle] = useState("");
  const [inputCompany, setInputCompany] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputStartDate, setInputStartDate] = useState("");
  const [inputEndDate, setInputEndDate] = useState(""); 

  // function handleSubmit(e) { 
  //   e.preventDefault();
  //   setInputJobTitleProps(inputJobTitle);
  //   setInputCompanyProps(inputCompany);
  //   setInputDescriptionProps;(inputDescription);
  //   setInputStartDateProps(inputStartDate);
  //   setInputEndDateProps(inputEndDate);
  // }

  return (
    <>
      <form>
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
                handleSubmitExperience(
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
            {/* <button>Edit</button> */}
          </div>
        </div>
      </form>
      {/* <ProfessionalExperienceCVComponent
        inputJobTitle={inputJobTitleProps}
        inputCompany={inputCompanyProps}
        inputDescription={inputDescriptionProps}
        inputStartDate={inputStartDateProps}
        inputEndDate={inputEndDateProps}
      ></ProfessionalExperienceCVComponent> */}
    </>
  );
}
