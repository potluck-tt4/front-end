import axios from 'axios'
import React, { useState, useEffect,} from 'react'
import CreatePotLuck from './CreatePotLuck'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import signInSchema from '../validation/signInSchema'
import {connect} from 'react-redux'


const initialFormValues = {
    name: '',
    password: '',
  };
  
  const initialFormErrors = {
    name: '',
    password: '',
  };

  const initialUsername = [];
  const initialDisabled = true;

const UserSignIn = () => {
    const history = useHistory()
    const [formData, setFormData] = useState({ username: '', password: '' })
    const [username, setUsername] = useState(initialUsername)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const handleSubmitLogin = (e) => {
      
      e.preventDefault();
      axios.post("https://potluck-backend-tt4.herokuapp.com/auth/login", formData)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        history.push('/CreatePotluckPage')
        console.log(res.data)
        
      })
      .catch ((err) => {
        setFormData({username: '', password: ''})
        console.log(err)
      })
  
} 


    
    
 // form validation
    const handleFormValidation = (name, value) => {
        yup
          .reach(signInSchema, name)
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

      const handleSubmit = (evt) => {
        evt.preventDefault();
        const newUsername = {
          name: formValues.name,
          password: formValues.password,
        }
        setUsername(username.concat(newUsername))
        setFormValues(initialFormValues)
      }



 //grab input data
    const onChange = event => {
        const { name, value } = event.target
        handleFormValidation(name, value)
        
    }


    useEffect(() => {
        signInSchema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);


    return (
        <div>
            <SignInContainer>
                <h2>Log In</h2>
                <SignInForm className='signInForm' onSubmit={handleSubmit}>
                    <StyledSignInErrors className='signInErrors'>
                        <div>{errors.name}</div>
                        <div>{errors.password}</div>
                    </StyledSignInErrors>
                    <SignInInputs className='signInInputs'>
                        <label>Username: <br />
                            <input
                                    value={formValues.name}
                                    onChange={onChange}
                                    id='nameID'
                                    name='name'
                                    type='text'
                                    placeholder='Userame..' />
                        </label>
                        <label>Password: <br />
                            <input
                                    value={formValues.password}
                                    onChange={onChange}
                                    id='passwordID'
                                    name='password'
                                    type='password'
                                    placeholder='Password..' />
                        </label>
                        <button onClick={handleSubmitLogin} id='signInBtn' disabled={disabled}>Sign In</button>
                    </SignInInputs>
                </SignInForm>

            </SignInContainer>
            <CreatePotLuck />
        </div>
    )
}
const mapStateToProps = (state) => {
  return state

}

export default connect(mapStateToProps(), {})(UserSignIn)

const backgroundImageSignIn = 'https://www.makeitgrateful.com/wp-content/uploads/2018/08/potluck-dinner-table.jpg'


const SignInContainer = styled.div`
    width: 100%;
    padding: 2.5rem 0 2.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    margin: 0 0 10% 0;
    font-size: 1.6rem;
    background-image: url(${backgroundImageSignIn});
    background-position: center;
    background-size: cover;
}

h2 {
        width: 10%;
        
        
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
}

`
const SignInInputs = styled.div `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;


const SignInForm = styled.form`
    width: 60%;
    padding: 2.5rem 0 2.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 10% 0;
    label, input {
    font-size: 1.6rem;
    text-align:center;
    }
button {
    width: 15%;
    border-radius: 25px;
    border: 3px solid green;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(100, 100, 100)
    transition: .3s;
    cursor: pointer;
    &:hover{
        background-color: rgba(33, 66, 150, 0.9);
        }
    label {
       background-color:blue;
       text-align:center;
    }
    input {
        text-align:center;
        border: 2px solid red;
        border-radius: 10px;
    }
   
    
`
const StyledSignInErrors = styled.div`
    background: khaki;
    color: chocolate;
`;
