import React from 'react'

export default function ProfessionalExperienceCVComponent({ experienceFormInput }) {
  return (
    <div className="professional-experience-cv-component-container">
      <h3>{experienceFormInput.inputJobTitle}</h3>
      <h3>{experienceFormInput.inputCompany}</h3>
      <h3>{experienceFormInput.inputDescription}</h3>
      <h3>{experienceFormInput.inputStartDate}</h3>
      <h3>{experienceFormInput.inputEndDate}</h3>
    </div>
  );
}
