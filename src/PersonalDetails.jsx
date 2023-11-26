import React from 'react';
import { useState } from 'react';
import PersonalDetailsCVComponent from './PersonalDetailsCVComponent';
import App from './App';


export default function PersonalDetails({
  handleSubmit,
  personalDetailsForm,
  setPersonalDetailsForm,
}) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [showed, setShowed] = useState(false);

  function clearPersonalDetailsInputs() {
    setInputName('');
    setInputEmail('');
    setInputAddress('');
    setInputPhone('');
  }

  function handleDelete(e) {
    let clickedOnEntry = e.target.name;

    setPersonalDetailsForm(personalDetailsForm.filter(item => item.keyForm !== clickedOnEntry));
  } 

  function handleEdit(item) { 
    setInputName(item.inputName);
    setInputEmail(item.inputEmail);
    setInputAddress(item.inputAddress);
    setInputPhone(item.inputPhone);
    setShowed(showed);
  }

  return (
    <>
      <div className="personal-details-container">
        <h3>Personal Details:</h3>
        <div className="dropdown-icon-personal-details">
          <img
            src="Icons/down-arrow.png"
            onClick={() => setShowed(!showed)}
          ></img>
        </div>

        <form
          className="hide-show-content-personal-details"
          style={showed ? { display: 'none' } : { display: 'flex' }}
        >
          {/* <form> */}
          <label>Full Name: </label>
          <input
            type="text"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          ></input>
          <label>E-Mail:</label>
          <input
            type="text"
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
          ></input>
          <label>Address: </label>
          <input
            type="text"
            value={inputAddress}
            onChange={e => setInputAddress(e.target.value)}
          ></input>
          <label>Phone Number:</label>
          <input
            type="text"
            value={inputPhone}
            onChange={e => setInputPhone(e.target.value)}
          ></input>
          <div className="personal-details-btn-container">
            <button
              onClick={e => {
                handleSubmit(
                  e,
                  inputName,
                  inputEmail,
                  inputAddress,
                  inputPhone,
                );
                clearPersonalDetailsInputs();
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <div>
          {/* <h3>{personalDetailsForm.inputName}</h3>
          <h3>{personalDetailsForm.inputEmail}</h3>
          <h3>{personalDetailsForm.inputAddress}</h3>
          <h3>{personalDetailsForm.inputPhone}</h3> */}
          {personalDetailsForm.map(item => {
            return (
              <div key={item.keyForm} className="personal-details-form-content">
                <h3>{item.inputName}</h3>
                <h3>{item.inputEmail}</h3>
                <h3>{item.inputAddress}</h3>
                <h3>{item.inputPhone}</h3>

                <div className="personal-details-btns-container-below-form">
                  <button
                    onClick={e => {
                      setShowed(!showed);
                      handleEdit(item);
                      handleDelete(e);
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}