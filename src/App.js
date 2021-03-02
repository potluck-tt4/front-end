import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../src/components/Header";
import UserSignIn from "../src/components/UserSignIn";
import UserSignUp from "../src/components/UserSignUp";
import PotluckPage from "./PotluckPage";
import CreatePotLuck from "../src/components/CreatePotLuck";
import * as yup from "yup";
import formSchema from "../src/validation/formSchema";
import { Route } from "react-router-dom";
import PrivateRoute from "../src/components/PrivateRoute";

const initialFormValues = {
  name: "",
  // email: "",
  password: "",
  // secondPass: "",
};

const initialFormErrors = {
  name: "",
  password: "",
  // secondPass: "",
};

const initialUser = [];
const initialDisabled = true;

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //Validation Handler - validating changes

  const handleChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /// Submit Handler - handles submits

  const handleSubmit = () => {
    const newUser = {
      name: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    setUser(user.concat(newUser));
    setFormValues(initialFormValues);
  };

  /*/onChange - handling changes

    const onChange = evt => {
      const { name, value, type, checked } = evt.target
      const valueToUse = type === 'checkbox' ? checked : value
      change(name, valueToUse)
  }
*/

  //Side Effect - Handle Button Status

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/UserSignIn">
        <UserSignIn
          values={formValues}
          change={handleChange}
          submit={handleSubmit}
          disabled={disabled}
          errors={errors}
        />
      </Route>
      <Route>
        <UserSignUp
          values={formValues}
          change={handleChange}
          submit={handleSubmit}
          disabled={disabled}
          errors={errors}
        />
      </Route>
      <Route exact path="/PotluckPage">
        <PotluckPage />
      </Route>

      <PrivateRoute exact path="CreatePotluck" component={CreatePotLuck} />
    </div>
  );
}

export default App;
