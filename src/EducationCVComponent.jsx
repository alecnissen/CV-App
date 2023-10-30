import React from 'react'

export default function EducationCVComponent({ educationFormInput }) {
  return (
    <div className="education-cv-component-container">
      <h3>{educationFormInput.schoolNameInput}</h3>
      <h3>{educationFormInput.degreeInput}</h3>
      <h3>{educationFormInput.startDateInput}</h3>
      <h3>{educationFormInput.endDateInput}</h3>
      <h3>{educationFormInput.locationInput}</h3>
    </div>
  );
} 

