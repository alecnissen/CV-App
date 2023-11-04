import React from 'react'

export default function ProfessionalExperienceCVComponent({ experienceForm }) {
  return <>
      <div className="professional-experience-cv-component-container">
        {experienceForm.map(item => {
          return (
            <div key={crypto.randomUUID()}>
              <h3>{item.inputJobTitle}</h3>
              <h3>{item.inputCompany}</h3>
              <h3>{item.inputDescription}</h3>
              <h3>{item.inputStartDate}</h3>
              <h3>{item.inputEndDate}</h3>
            </div>
          );
        })}
      </div>
    </>
}
