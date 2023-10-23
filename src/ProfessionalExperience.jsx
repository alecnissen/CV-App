import React from 'react'

export default function ProfessionalExperience() {
  return (
    <>
      <div className="professional-experience-form-container">
        <h3>Professional Experience:</h3>
        <label>Job Title:</label>
        <input></input>
        <label>Company:</label>
        <input></input>
        <label>Description:</label>
        <textarea></textarea>
        <label>Start Date:</label>
        <input type="date"></input>
        <label>End Date:</label>
        <input type="date"></input>
        <div className="professional-experience-btn-containers">
          <button>Submit</button>
          <button>Edit</button>
        </div>
      </div>
    </>
  );
}
