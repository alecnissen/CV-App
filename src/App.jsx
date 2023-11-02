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

  const [personalDetailsForm, setPersonalDetailsForm] = useState('');
  const [educationForm, setEducationForm] = useState([]);
  const [experienceForm, setExperienceForm] = useState([]);

  function handleSubmitPersonal(e, inputName, inputEmail, inputAddress, inputPhone) {
    e.preventDefault();
    const updatedInfo = {
      inputName: inputName,
      inputEmail: inputEmail,
      inputAddress: inputAddress,
      inputPhone: inputPhone,
    };
    setPersonalDetailsForm(updatedInfo);

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
    setEducationForm(updatedInfo);
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
    setExperienceForm(updatedInfo);
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
          // personalDetailsFormArray={personalDetailsFormArray}
        ></PersonalDetails>
        <Education
          handleSubmit={handleSubmitEducation}
          educationForm={educationForm}
          // clearEducationForm={clearEducationForm}
        ></Education>
        <ProfessionalExperience
          handleSubmit={handleSubmitExperience}
          experienceForm={experienceForm}
        ></ProfessionalExperience>
      </div>

      <div id="cv-page">
        <PersonalDetailsCVComponent
          personalDetailsForm={personalDetailsForm}
          // personalDetailsFormArray={personalDetailsFormArray}
        ></PersonalDetailsCVComponent>
        <EducationCVComponent
          educationForm={educationForm}
        ></EducationCVComponent>
        <ProfessionalExperienceCVComponent
          experienceForm={experienceForm}
        ></ProfessionalExperienceCVComponent>
      </div>
    </>
  );
}
