import React, { useState } from 'react' 

import EducationCVComponent from './EducationCVComponent';

import App from './App';

export default function Education({ handleSubmit, educationForm, setEducationForm }) {

  const [schoolNameInput, setSchoolNameInput] = useState('');
  const [degreeInput, setDegreeInput] = useState('');
  const [startDateInput, setStartDateInput] = useState('');
  const [endDateInput, setEndDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [keyForm, setKeyForm] = useState('');

  const [showedEducation, setShowedEducation] = useState(false);

  function clearEducationInputs() {
    setSchoolNameInput('');
    setDegreeInput('');
    setStartDateInput('');
    setEndDateInput('');
    setLocationInput('');
    setShowedEducation('');
  }

  // this will re-populate the input fields, once clicked so user can see what content was inside that entry 
  function handleEdit(item) {

      setSchoolNameInput(item.schoolNameInput);
      setDegreeInput(item.degreeInput);
      setStartDateInput(item.startDateInput);
      setEndDateInput(item.endDateInput);
      setLocationInput(item.locationInput);
      setKeyForm(item.keyForm);

  } 

  // this function, will update/modify the state, 

  function handleSave(item) {
    let educationFormCopy = [...educationForm];

    console.log(item);

    setSchoolNameInput(input => {
      input = schoolNameInput;
      return input;
    });

    setDegreeInput(input => {
      input = degreeInput;
      return input;
    });

    setStartDateInput(input => {
      input = startDateInput;
      return input;
    });

    setEndDateInput(input => {
      input = endDateInput;
      return input;
    });

    setLocationInput(input => {
      input = locationInput;
      return input;
    });

      console.log(schoolNameInput);
      console.log(degreeInput);
      console.log(startDateInput);
      console.log(endDateInput);
      console.log(locationInput);

         const updatedObj = {
          schoolNameInput: schoolNameInput,
          degreeInput: degreeInput,
          startDateInput: startDateInput,
          endDateInput: endDateInput,
          locationInput: locationInput,
         }

         console.log('UPDATED OBJECT AFTER PRESSING SAVE', updatedObj);
         console.log('COPY OF THE UPDATED ARRAY, WITHIN HANDLESAVE', educationFormCopy);

         setEducationForm([...educationFormCopy, updatedObj]);

  } 


  function handleDelete(e) {
    let clickedOnEntry = e.target.name;

    setEducationForm(
      educationForm.filter(item => item.keyForm !== clickedOnEntry),
    );
  }

  return (
    <>
      <div className="education-input-container">
        <h3>Education:</h3>

        <div className="dropdown-icon-education">
          <img
            src="Icons/down-arrow.png"
            onClick={() => setShowedEducation(!showedEducation)}
          ></img>
        </div>

        <form
          className="hide-show-content-education-details"
          style={showedEducation ? { display: 'none' } : { display: 'flex' }}
        >
          <label>School Name:</label>
          <input
            type="text"
            value={schoolNameInput}
            onChange={e => setSchoolNameInput(e.target.value)}
          ></input>
          <label>Degree:</label>
          <input
            type="text"
            value={degreeInput}
            onChange={e => setDegreeInput(e.target.value)}
          ></input>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDateInput}
            onChange={e => setStartDateInput(e.target.value)}
          ></input>
          <label>End Date:</label>
          <input
            type="date"
            value={endDateInput}
            onChange={e => setEndDateInput(e.target.value)}
          ></input>
          <label>Location:</label>
          <input
            type="text"
            value={locationInput}
            onChange={e => setLocationInput(e.target.value)}
          ></input>
          <div className="education-btns-container">
            <button
              onClick={e => {
                handleSubmit(
                  e,
                  schoolNameInput,
                  degreeInput,
                  startDateInput,
                  endDateInput,
                  locationInput,
                );
                clearEducationInputs();
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="education-form-content">
          {/* <h3>{educationForm.schoolNameInput}</h3>
          <h3>{educationForm.degreeInput}</h3>
          <h3>{educationForm.startDateInput}</h3>
          <h3>{educationForm.endDateInput}</h3>
          <h3>{educationForm.locationInput}</h3> */}
          {educationForm.map(item => {
            console.log('COPY OF THE UPDATED ARRAY, WITHIN RETURN', educationForm);
            return (
              <div key={item.keyForm} className="education-content-below-form">
                <h3>{item.schoolNameInput}</h3>
                <h3>{item.degreeInput}</h3>
                <h3>{item.startDateInput}</h3>
                <h3>{item.endDateInput}</h3>
                <h3>{item.locationInput}</h3>


                <div className="education-btns-container-below-form">
                  <button
                    onClick={e => {
                      handleEdit(item);
                    }}
                    name={item.keyForm}
                  >
                    Edit
                  </button>
                  <button
                    onClick={e => {
                      handleDelete(e);
                    }}
                    name={item.keyForm}
                  >
                    Delete
                  </button>

                  <button
                    onClick={e => {
                      handleSave(item);
                    }}
                    name={item.keyForm}
                  >
                    Save
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
