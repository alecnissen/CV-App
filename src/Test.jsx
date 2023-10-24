import React from 'react'

export default function Test({ inputName, inputEmail, inputAddress, inputPhone }) {
  return (
  <>
    <div>
      <h3>{inputName}</h3>
      <h3>{inputEmail}</h3>
      <h3>{inputAddress}</h3>
      <h3>{inputPhone}</h3>
    </div>
  </>
  ) 
} 
