import React from 'react';
import { useState } from 'react';
import PersonalDetailsCVComponent from './PersonalDetailsCVComponent';
import App from './App';


export default function PersonalDetails({handleSubmit}) {
  // const [personalInfo, setPersonalInfo] = useState({
  //   inputName: '',
  //   inputEmail: '',
  //   inputAddress: '',
  //   inputPhone: '',
  // });

  // const [inputName, inputEmail, inputAddress, inputPhone] = props; 

  // rendered content with this
  // const {name, email, address, phone} = props;

  // this rendered content
  // const {handleSubmit} = props;

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  // function handleSubmitPersonal(e) {
  //   e.preventDefault();

  //   const updatedInfo = {
  //     inputName: inputName,
  //     inputEmail: inputEmail,
  //     inputAddress: inputAddress,
  //     inputPhone: inputPhone,
  //   };

  //   setPersonalInfo(updatedInfo);
  // }

  return (
    <>
      {/* <form className="personal-details-form"> */}
        <div className="personal-details-container">
          <h3>Personal Details:</h3>
          <label>Full Name: </label>
          <input
            type="text"
            onChange={e => setInputName(e.target.value)}
          ></input>
          <label>E-Mail:</label>
          <input
            type="text"
            onChange={e => setInputEmail(e.target.value)}
          ></input>
          <label>Address: </label>
          <input
            type="text"
            onChange={e => setInputAddress(e.target.value)}
          ></input>
          <label>Phone Number:</label>
          <input
            type="text"
            onChange={e => setInputPhone(e.target.value)}
          ></input>
          <div className="personal-details-btn-container">
            <button
              onClick={() =>
                handleSubmit(
                  inputName,
                  inputEmail,
                  inputAddress,
                  inputPhone,
                )
              }
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      {/* </form> */}
    </>
  );
}
