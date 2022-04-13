import React, { useState } from "react";
import "./index.css";

 function App() {
  const [value,setValues]=useState({
    firstName:"",
    lastname:"",
    email:"",
  })

  const [submitted, setSubmitted]=useState(false)
  const [valid,setValid] =useState(false)

  const handleFirstNameInputChange =(e) =>{
    setValues({...value,firstName:e.target.value})
  }

  const handleLastNameInputChange =(e) =>{
    setValues({...value,lastname:e.target.value})
  }

  
  const handleemailInputChange =(e) =>{
    setValues({...value,email:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    if (value.firstName&& value.lastname&&value.email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
          {submitted&& valid?<div class="success-message">Success! Thank you for registering</div> :null}
        <input
        onChange={handleFirstNameInputChange}
        value={value.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted&&!value.firstName? <span id="first-name-error">Please enter a first name</span> :null }
        <input
        onChange={handleLastNameInputChange}
        value={value.lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
         { submitted&&!value.lastname?<span id="last-name-error">Please enter a last name</span> :null}
        <input
        onChange={handleemailInputChange}
        value={value.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted&&!value.email ?<span id="email-error">Please enter an email address</span> :null }
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App