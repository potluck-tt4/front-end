import React, { useState, useEffect } from "react";
import "./App.css";
import Header from '../src/components/Header'
import UserSignIn from '../src/components/UserSignIn'
import UserSignUp from '../src/components/UserSignUp'
import PotluckPage from "./PotluckPage";
import * as yup from 'yup'
import formSchema from '../src/validation/formSchema'




const initialFormValues = {
  name: '',
  nameUp: '',
  password: '',
  secondPass: '',
}

const initialFormErrors = {
  name: '',
  nameUp: '',
  password: '',
  secondPass: '',
}

const initialUser = []
const initialDisabled = true

function App() {
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  //Validation Handler - validating changes


  const handleChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors, [name]: "",
        });
      })
      .catch(err => {
        setErrors({
          ...errors, [name]: err.errors[0]
        });
      })

    setFormValues({
      ...formValues, [name]: value
    })
  };

  /// Submit Handler - handles submits

  const handleSubmit = () => {
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      secondPassword: formValues.secondPassword,
    }
    setUser(user.concat(newUser))
    setFormValues(initialFormValues)
  }




  /*/onChange - handling changes

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}
*/


  //Side Efffect - Handle Button Status


  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Header />
      <UserSignIn
        values={formValues}
        change={handleChange}
        submit={handleSubmit}
        disabled={disabled}
        errors={errors}
      />
      <UserSignUp
        values={formValues}
        change={handleChange}
        submit={handleSubmit}
        disabled={disabled}
        errors={errors}
      />

    </div>
  );
}

export default App;
