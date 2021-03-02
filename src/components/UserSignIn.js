import React from "react";
import CreatePotLuck from "./CreatePotLuck";

const UserSignIn = (props) => {
  const { values, change, submit, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  return (
    <div>
      <h2>Log In</h2>
      <form className="signInForm" onSubmit={onSubmit}>
        <div className="signInErrors">
          <div>{errors.name}</div>
          <div>{errors.password}</div>;
        </div>
        <div className="signInInputs">
          <label>
            Name:
            <input
              value={values.name}
              onChange={onChange}
              id="nameID"
              name="name"
              type="text"
              placeholder="Username.."
            />
          </label>
          <label>
            Password:
            <input
              value={values.name}
              onChange={onChange}
              id="passwordID"
              name="password"
              type="password"
              placeholder="Password.."
            />
          </label>
          <button id="signInBtn" disabled={disabled}>
            Sign In
          </button>
        </div>
      </form>

      <CreatePotLuck />
    </div>
  );
};

export default UserSignIn;
