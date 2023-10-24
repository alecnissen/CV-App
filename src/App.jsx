
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import "./App.css";
import Header from './Header';
import Test from './Test';
import ProfessionalExperience from './ProfessionalExperience';
import CVComponent from './CVComponent';
// import { useState } from 'react';



export default function App() {

  return (
    <>
        <Header></Header>
        <CVComponent></CVComponent>
        <PersonalDetails></PersonalDetails>
        <Education></Education>
        <ProfessionalExperience></ProfessionalExperience>
        {/* <Test></Test> */}
    </>
  );
}

