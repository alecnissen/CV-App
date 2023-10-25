import React from 'react'

export default function ProfessionalExperienceCVComponent({
  inputJobTitle,
  inputCompany,
  inputDescription,
  inputStartDate,
  inputEndDate,
}) {
  return (
    <div className="professional-experience-cv-component-container">
      <h3>{inputJobTitle}</h3>
      <h3>{inputCompany}</h3>
      <h3>{inputDescription}</h3>
      <h3>{inputStartDate}</h3>
      <h3>{inputEndDate}</h3>
    </div>
  ); 
}
