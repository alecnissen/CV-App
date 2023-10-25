import React from 'react'

export default function HeaderCVComponent({ inputName, inputEmail, inputAddress, inputPhone }) {
  return (
    <>
      <div className="CV-component-container">
        {/* <h1>This is the cv component</h1> */}
        <h3>{inputName}</h3>
        <h3>{inputEmail}</h3>
        <h3>{inputAddress}</h3>
        <h3>{inputPhone}</h3>
      </div>
    </>
  );
}
