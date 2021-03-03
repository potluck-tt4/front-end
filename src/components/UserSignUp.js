import React from "react";
import styled from "styled-components";
import axios from "axios";
import signUpSchema from "../validation/signUpSchema";


const initialFormValues = {
  name: "",
  password: ""
};

const initialFormErrors = {
  name: "",
  password: ""
};


const UserSignUp = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  //grab input data
  const onChange = (event) => {
    const { name, values } = event.target;
    handleFormValidation(name,values)
  };

  //validate input data and update states
  const handleFormValidation  = (name, value) => {
    yup
      .reach(signUpSchema, name)
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

  const handleSubmit = () => {
    const newUser = {
      name: formValues.username,
      password: formValues.password,
    };
    setUser(user.concat(newUser));
    setFormValues(initialFormValues);
  };
  

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        username: form.username,
        password: form.password
      };

      useEffect(() => {
        formSchema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);

    axios
      .post("https://potluck-backend-tt4.herokuapp.com/api/auth/register", newUser)
      
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
            values={formValues.name}
            onChange={onChange}
            placeholder="Enter Name"
          />
        </label>
      
        <label>
          Password: <br />
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onChange}
            placeholder="Enter password here..."
          />
        </label>
       
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
