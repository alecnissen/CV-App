
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import "./App.css";
// import Header from './Header';
import Test from './Test';
import ProfessionalExperience from './ProfessionalExperience';
import HeaderCVComponent from './HeaderCVComponent';
import EducationCVComponent from './EducationCVComponent';
// import { useState } from 'react';



export default function App() {

  return (
    <>
      {/* <Header></Header> */}
      <div className="main-header-container">
        <h1 className="main-header">CV/Resume Generator</h1>
      </div>
      <HeaderCVComponent></HeaderCVComponent>
      <PersonalDetails></PersonalDetails>
      <Education></Education>
      <ProfessionalExperience></ProfessionalExperience>
      {/* <Test></Test> */}
    </>
  );
}

