import React from "react";
import styled from "styled-components";
import axios from "axios";
import formSchema from "../validation/formSchema";

const UserSignUp = (props) => {
  const { values, change, submit } = props;
  console.log("values", values);

  const onChange = (event) => {
    console.log("event target", event.target);
    const { name, values, type, checked } = event.target;
    const valToUse = type === "checkbox" ? checked : values;
    change(name, valToUse);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://potluck-backend-tt4.herokuapp.com/api/auth/register")
      //   new user function?
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    submit();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            values={values.name}
            onChange={onChange}
            placeholder="Enter Name"
          />
        </label>
        {/* <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Enter email here..."
          />
        </label> */}
        <label>
          Password: <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
            placeholder="Enter password here..."
          />
        </label>
        {/* <label>
          Confirm Password: <br />
          <input
            type="password"
            name="password"
            value={values}
            onChange={onChange}
          />
        </label> */}
      </form>
      <button onClick={onSubmit} type="submit">
        Sign Me Up
      </button>
    </div>
  );
};

export default UserSignUp;

/*
export default function UserSignUp(props) {
    const { values, change, submit, disabled, errors } = props;

    const onChange = event => {
        console.log(event.target)
        const { name, value, type, checked } = event.target
        const valToUse = type === 'checkbox' ? checked : values;
        change(name, valToUse)
    }
    

    
}
*/
