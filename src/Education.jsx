import React, { useState } from 'react' 

import EducationCVComponent from './EducationCVComponent';

import App from './App';




export default function Education({ handleSubmit, educationForm, setEducationForm }) {
  

// let clickedOnEntry 

// console.log(clickedOnEntry); 

// function computedProperty(obj) { 

// }


const [schoolNameInput, setSchoolNameInput] = useState('');
const [degreeInput, setDegreeInput] = useState('');
const [startDateInput, setStartDateInput] = useState('');
const [endDateInput, setEndDateInput] = useState('');
const [locationInput, setLocationInput] = useState('');
const [keyForm, setKeyForm] = useState('');

const [showedEducation, setShowedEducation] = useState(false); 

let isEditing = educationForm.some((item) => (item.keyForm === keyForm))

console.log('checking status of isEditing variable', isEditing);


   function clearEducationInputs( ) {
    setSchoolNameInput(''); 
    setDegreeInput('');
    setStartDateInput(''); 
    setEndDateInput('');
    setLocationInput('');
    setShowedEducation('');
  } 

  // old handle edit function 
  // function handleEdit(e) {
     
  //     let selectedEntry = e.target.name; 
  //     console.log(selectedEntry);

  //      for (let i = 0; i < educationForm.length; i++) { 
  //       console.log(educationForm);
  //       let item = educationForm[i]; 
  //       if (item.keyForm === selectedEntry) {
  //         // educationForm.splice(item, 1);
  //         setSchoolNameInput(item.schoolNameInput);
  //         setDegreeInput(item.degreeInput);
  //         setStartDateInput(item.startDateInput);
  //         setEndDateInput(item.endDateInput);
  //         setLocationInput(item.locationInput); 
  //       }  
  //       setEducationForm([...educationForm]);
  //      }
  // } 

  function handleEdit(item) {

    // setting the educationForm state with the result of using map on the education array. 

    setEducationForm(educationForm.map(item => { 
      // if the item in education state, does not match an item submitted into state, return the item
      // checking if the state already contains that submitted entry,
      if (item.keyForm !== keyForm) { 
        return item;
      } else { 
        // else we did find the same entry (matching keys) in the array, so lets return the updated educationForm array, along with the updated object entry. 
        return {educationForm, schoolNameInput: schoolNameInput, degreeInput: degreeInput, startDateInput: startDateInput, endDateInput: endDateInput, locationInput: locationInput}
      }
    })) 
    
    // once the edit btn is clicked, these will re-populate the input fields, with the entry content that was clicked on. 
    setSchoolNameInput(item.schoolNameInput);
    setDegreeInput(item.degreeInput);
    setStartDateInput(item.startDateInput);
    setEndDateInput(item.endDateInput);
    setLocationInput(item.locationInput); 
    setKeyForm(item.keyForm);
    
  } 

  // 
  // function handleEdit(e) { 
  //    let selectedEntry = e.target.name; 

  //   educationForm.filter(item => { 
  //      item !== selectedEntry
  //    })
  // } 

  function handleDelete(e) {
    // clickedOnEntry = e.target.name;
    // console.log(clickedOnEntry)
    // setEducationForm(educationForm.filter(item => item.keyForm !== clickedOnEntry))
    let clickedOnEntry = e.target.name;

    setEducationForm(educationForm.filter(item => item.keyForm !== clickedOnEntry));
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
          // onSubmit={e => clearEducationForm(e)}
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
                    onClick={(e) => {
                      // handleDelete(e);
                      // clickedOnEntry = e.target.name;
                      // console.log(clickedOnEntry)
                      // setEducationForm(educationForm.filter(item => item.keyForm !== clickedOnEntry))
                      handleDelete(e);
                    }}
                    name={item.keyForm}
                  >
                    Delete
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
