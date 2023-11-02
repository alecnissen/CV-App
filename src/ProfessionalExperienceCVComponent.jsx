import React from 'react'

export default function ProfessionalExperienceCVComponent({ experienceForm }) {
  return (
    <div className="professional-experience-cv-component-container">
      <h3>{experienceForm.inputJobTitle}</h3>
      <h3>{experienceForm.inputCompany}</h3>
      <h3>{experienceForm.inputDescription}</h3>
      <h3>{experienceForm.inputStartDate}</h3>
      <h3>{experienceForm.inputEndDate}</h3>
    </div>
  );
}
