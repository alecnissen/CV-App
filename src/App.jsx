import './App.css';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import ProfessionalExperience from './ProfessionalExperience';
import EducationCVComponent from './EducationCVComponent';
import PersonalDetailsCVComponent from './PersonalDetailsCVComponent.jsx';
import ProfessionalExperienceCVComponent from './ProfessionalExperienceCVComponent';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

export default function App() { 

  const [personalDetailsForm, setPersonalDetailsForm] = useState([]);
  const [educationForm, setEducationForm] = useState([]);
  const [experienceForm, setExperienceForm] = useState([]);

  function handleSubmitPersonal(e, inputName, inputEmail, inputAddress, inputPhone) {
    e.preventDefault();
    const updatedInfo = {
      inputName: inputName,
      inputEmail: inputEmail,
      inputAddress: inputAddress,
      inputPhone: inputPhone,
      keyForm: crypto.randomUUID(),
      keyCV: crypto.randomUUID(),
    }; 
    
    setPersonalDetailsForm([...personalDetailsForm, updatedInfo]);

  } 

  function handleSubmitEducation(e, schoolNameInput, degreeInput, startDateInput, endDateInput, locationInput) { 
     e.preventDefault();
    const updatedInfo = {
      schoolNameInput: schoolNameInput,
      degreeInput: degreeInput,
      startDateInput: startDateInput,
      endDateInput: endDateInput,
      locationInput: locationInput,
      keyForm: crypto.randomUUID(),
      keyCV: crypto.randomUUID(),
    }; 
    setEducationForm([...educationForm, updatedInfo])
  } 

  function handleSubmitExperience(
    e, 
    inputJobTitle,
    inputCompany,
    inputDescription,
    inputStartDate,
    inputEndDate,
  ) {
    e.preventDefault();
    const updatedInfo = {
      inputJobTitle: inputJobTitle,
      inputCompany: inputCompany,
      inputDescription: inputDescription,
      inputStartDate: inputStartDate,
      inputEndDate: inputEndDate,
      keyForm: crypto.randomUUID(),
      keyCV: crypto.randomUUID(),
    };
    setExperienceForm([...experienceForm, updatedInfo]);
  }

  return (
    <>
      <div className="main-header-container">
        <h1 className="main-header">CV/Resume Generator</h1>
      </div>
      <div id="form">
        <PersonalDetails 
          handleSubmit={handleSubmitPersonal}
          personalDetailsForm={personalDetailsForm}
          setPersonalDetailsForm={setPersonalDetailsForm}
        ></PersonalDetails>
        <Education
          handleSubmit={handleSubmitEducation}
          educationForm={educationForm}
          setEducationForm={setEducationForm}
        ></Education>
        <ProfessionalExperience
          handleSubmit={handleSubmitExperience}
          experienceForm={experienceForm}
          setExperienceForm={setExperienceForm}
        ></ProfessionalExperience>
      </div>

      <div id="cv-page">
        <PersonalDetailsCVComponent
          personalDetailsForm={personalDetailsForm}
        ></PersonalDetailsCVComponent>
        <h3 className="education-section-main-header">Education</h3>
        <EducationCVComponent
          educationForm={educationForm}
        ></EducationCVComponent>
        <h3 className="experience-section-main-header">
          Professional Experience
        </h3>
        <ProfessionalExperienceCVComponent
          experienceForm={experienceForm}
        ></ProfessionalExperienceCVComponent>
      </div>
    </>
  );
}
