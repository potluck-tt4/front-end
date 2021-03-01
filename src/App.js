import React, { useState, useEffect } from "react";
import "./App.css";

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  secondPass: '',

}

const initialFormErrors = {
  name: '',
  password: '',
  secondPass: '',
  
}

const initialUser = []
const initialDisabled = true

function App() {
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  return (
    <div className="App">
      <nav>
        <div className='header'>
          <h1>PotLuck 🍀</h1>
        <div className='buttons'>
          <button className='homeBtn'>Home</button>
          <button className='signIn'>Sign In</button>
          <button className='signUp'>Sign Up</button>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
