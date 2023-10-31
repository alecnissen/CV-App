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

  // init state object that will hold all the personalDetails form entries 
  // 

  const [personalDetailsFormInput, setPersonalDetailsFormInput] = useState('');
  const [educationFormInput, setEducationFormInput] = useState('');
  const [experienceFormInput, setExperienceFormInput] = useState('');

  function handleSubmitPersonal(e, inputName, inputEmail, inputAddress, inputPhone) {
    e.preventDefault();
    const updatedInfo = {
      inputName: inputName,
      inputEmail: inputEmail,
      inputAddress: inputAddress,
      inputPhone: inputPhone,
    };
    setPersonalDetailsFormInput(updatedInfo);

    // setPersonalDetailsFormArray(updatedInfo);
  } 

  function handleSubmitEducation(e, schoolNameInput, degreeInput, startDateInput, endDateInput, locationInput) { 
     e.preventDefault();
    const updatedInfo = {
      schoolNameInput: schoolNameInput,
      degreeInput: degreeInput,
      startDateInput: startDateInput,
      endDateInput: endDateInput,
      locationInput: locationInput,
    };
    setEducationFormInput(updatedInfo);

  } 

  // function clearEducationForm(e) { 
  //   e.reset();
  // }

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
    };
    setExperienceFormInput(updatedInfo);
  }

  return (
    <>
      <div className="main-header-container">
        <h1 className="main-header">CV/Resume Generator</h1>
      </div>
      <div id="form">
        <PersonalDetails
          handleSubmit={handleSubmitPersonal}
          personalDetailsFormInput={personalDetailsFormInput}
          // personalDetailsFormArray={personalDetailsFormArray}
        ></PersonalDetails>
        <Education
          handleSubmit={handleSubmitEducation}
          educationFormInput={educationFormInput}
          // clearEducationForm={clearEducationForm}
        ></Education>
        <ProfessionalExperience
          handleSubmit={handleSubmitExperience}
          experienceFormInput={experienceFormInput}
        ></ProfessionalExperience>
      </div>

      <div id="cv-page">
        <PersonalDetailsCVComponent
          personalDetailsFormInput={personalDetailsFormInput}
          // personalDetailsFormArray={personalDetailsFormArray}
        ></PersonalDetailsCVComponent>
        <EducationCVComponent
          educationFormInput={educationFormInput}
        ></EducationCVComponent>
        <ProfessionalExperienceCVComponent
          experienceFormInput={experienceFormInput}
        ></ProfessionalExperienceCVComponent>
      </div>
    </>
  );
}
