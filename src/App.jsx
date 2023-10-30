import './App.css';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
// import Header from './Header';
import ProfessionalExperience from './ProfessionalExperience';
import EducationCVComponent from './EducationCVComponent';
import PersonalDetailsCVComponent from './PersonalDetailsCVComponent.jsx';
import ProfessionalExperienceCVComponent from './ProfessionalExperienceCVComponent';
import { useState } from 'react';

export default function App() { 

  const [personalDetailsFormInput, setPersonalDetailsFormInput] = useState('');
  const [educationFormInput, setEducationFormInput] = useState('');
  const [experienceFormInput, setExperienceFormInput] = useState('');

  function handleSubmitPersonal(inputName, inputEmail, inputAddress, inputPhone) {
    const updatedInfo = {
      inputName: inputName,
      inputEmail: inputEmail,
      inputAddress: inputAddress,
      inputPhone: inputPhone,
    };
    setPersonalDetailsFormInput(updatedInfo);
  } 

  function handleSubmitEducation(schoolNameInput, degreeInput, startDateInput, endDateInput, locationInput) { 
    const updatedInfo = {
      schoolNameInput: schoolNameInput,
      degreeInput: degreeInput,
      startDateInput: startDateInput,
      endDateInput: endDateInput,
      locationInput: locationInput,
    };
    setEducationFormInput(updatedInfo);
  } 

  function handleSubmitExperience(inputJobTitle, inputCompany, inputDescription, inputStartDate, inputEndDate) { 
    const updatedInfo = {
      inputJobTitle: inputJobTitle,
      inputCompany: inputCompany,
      inputDescription: inputDescription,
      inputStartDate: inputStartDate,
      inputEndDate: inputEndDate,
    };
    setExperienceFormInput(updatedInfo);
  }

  return (
    <>
      <div className="main-header-container">
        <h1 className="main-header">CV/Resume Generator</h1>
      </div>
      <div id="form">
        <PersonalDetails handleSubmit={handleSubmitPersonal}></PersonalDetails>
        <Education handleSubmit={handleSubmitEducation}></Education>
        <ProfessionalExperience handleSubmit={handleSubmitExperience}></ProfessionalExperience>
      </div>

      <div id="cv-page">
        <PersonalDetailsCVComponent personalDetailsFormInput={personalDetailsFormInput}></PersonalDetailsCVComponent>
        <EducationCVComponent educationFormInput={educationFormInput}></EducationCVComponent>
        <ProfessionalExperienceCVComponent experienceFormInput={experienceFormInput}></ProfessionalExperienceCVComponent>
      </div>
    </>
  );
}
