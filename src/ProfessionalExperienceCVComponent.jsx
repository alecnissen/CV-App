import React from 'react'

export default function ProfessionalExperienceCVComponent({ experienceForm }) {
  return <>
      <div className="professional-experience-cv-component-container">
        {experienceForm.map(item => {
          return (
            <>
              <div className="experience-content-container" key={item.keyCV}>
                <h3>{item.inputJobTitle}</h3>
                <h3>{item.inputCompany}</h3>
                <h3>
                  {item.inputStartDate} - {item.inputEndDate}
                </h3>
              </div>

              <div className="experience-content-container-description">
                <p>{item.inputDescription}</p>
              </div> 

            <div className='experience-content-bottom-border'></div>

            </>
          );
        })}
      </div>
    </>
}
