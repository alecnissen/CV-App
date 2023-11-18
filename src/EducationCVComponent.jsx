import React from 'react'

export default function EducationCVComponent({ educationForm }) {
  

  return <> 
    <div className="education-cv-component-container">
      {educationForm.map(item => {
        return <div className='education-content-container' key={item.keyCV}>
            <h3>{item.schoolNameInput}</h3>
            <h3>{item.degreeInput}</h3>
            <h3>{item.startDateInput}</h3>
            <h3>{item.endDateInput}</h3>
            <h3>{item.locationInput}</h3>
          </div>
      })}
  </div>
  </>
  
} 


