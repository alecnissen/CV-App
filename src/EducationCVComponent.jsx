import React from 'react'

export default function EducationCVComponent({ educationForm }) {
  return (
    <div className="education-cv-component-container">
      <h3>{educationForm.schoolNameInput}</h3>
      <h3>{educationForm.degreeInput}</h3>
      <h3>{educationForm.startDateInput}</h3>
      <h3>{educationForm.endDateInput}</h3>
      <h3>{educationForm.locationInput}</h3>
    </div>
  );
} 

