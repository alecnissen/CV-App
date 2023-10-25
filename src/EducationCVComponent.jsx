import React from 'react'

export default function EducationCVComponent({ schoolNameInput, degreeInput, startDateInput, endDateInput, locationInput  }) {
  return (
    <div className="education-cv-component-container">
      <h3>{schoolNameInput}</h3>
      <h3>{degreeInput}</h3>
      <h3>{startDateInput}</h3>
      <h3>{endDateInput}</h3>
      <h3>{locationInput}</h3>
    </div>
  );
}
