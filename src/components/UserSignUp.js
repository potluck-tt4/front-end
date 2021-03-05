import {useHistory} from 'react-router-dom'
import React, { useState, useEffect} from 'react'
import styled from 'styled-components';
import * as yup from 'yup';
import signUpSchema from '../validation/signUpSchema'
import axios from 'axios'

const initialFormValues = {
    name: '',
    password: '',
  }
  
  const initialFormErrors = {
    name: '',
    password: '',
  }

  //need to test disable feature as it gave unit 3 problems

  const initialUsername = []
  const initialDisabled = true

const UserSignUp = () => {
    const history = useHistory()
    const [formData, setFormData] = useState ({username: '', password: ''})
    const [username, setUsername] = useState(initialUsername)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    
    
    const handleSubmitLogin = (e) => {
      e.preventDefault();
      axios.post("https://potluck-backend-tt4.herokuapp.com/auth/", formData)
      .then((res) => {
        console.log(res.data)
        // localStorage.setItem('token', res.data.token)
        history.push('/CreatePotluckPage')
        
        
      })
      .catch ((err) => {
        console.log(err)
      })
  } 

    


    
 // form validation
    const handleFormValidation = (name, value) => {
        yup
          .reach(signUpSchema, name)
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
    
    // const onSubmit = event => {
    //     event.preventDefault();
    //     const newUsername = {
    //         name: formValues.name,
    //         password: formValues.password
    //     }
        
    //     submit();
    // }

    useEffect(() => {
        signUpSchema.isValid(formValues).then((valid) => {

          setDisabled(!valid);
        });
      }, [formValues]);



    return (
        <SignUpContainer>
            <h2>Sign Up</h2>
            <div className='signUpErrors'>
                <div>{errors.name}</div>
                <div>{errors.password}</div>
            </div>
            <SignUpForm onSubmit={handleSubmit}>
                <label>Name: <br />
                    <input
                        type='text'
                        name='name'
                        values={formValues.name}
                        onChange={onChange}
                        placeholder='Enter Name'
                        />
                </label>
                <label>Password: <br />
                    <input
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={onChange}
                        placeholder='Enter password here...'
                        />
                </label>

                <button onClick={handleSubmitLogin} type='submit' disabled={disabled}>Sign Me Up</button>

            </SignUpForm>
        </SignUpContainer>
    )
}

export default UserSignUp



//  const UserSignUp = (props) => {
    
//     const { values, change, submit, disabled, errors } = props;
    
//     const onChange = event => {
//         console.log('event target', event.target)
//         const { name, value } = event.target
//         change(name, value)
        
//     }
    
//     const onSubmit = event => {
//         event.preventDefault();
        
//         submit();
//     }
//     return (
//         <SignUpContainer>
//             <h2>Sign Up</h2>
//             <div className='signUpErrors'>
//                 <div>{errors.nameUp}</div>
//                 <div>{errors.password}</div>
//             </div>
//             <SignUpForm onSubmit={onSubmit}>
//                 <label>Name: <br />
//                     <input
//                         type='text'
//                         name='nameUp'
//                         values={values.nameUp}
//                         onChange={onChange}
//                         placeholder='Enter Name'
//                         />
//                 </label>
//                 <label>Password: <br />
//                     <input
//                         type='password'
//                         name='password'
//                         value={values.password}
//                         onChange={onChange}
//                         placeholder='Enter password here...'
//                         />
//                 </label>

//                 <button type='submit' disabled={disabled}>Sign Me Up</button>

//             </SignUpForm>
//         </SignUpContainer>
//     )
// }

// export default UserSignUp

const backgroundImageSignUp = 'https://media1.popsugar-assets.com/files/thumbor/duzrUaRe0-pnPd3CvaG0CqCwRbI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/06/29/925/n/1922398/08973f82_42-53706616.jpg'

const SignUpContainer = styled.div`
    width: 100%;
    padding: 2.5rem 0 2.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    margin: 0 0 10% 0;
    font-size: 1.6rem;
    background-image: url(${backgroundImageSignUp});
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


const SignUpForm = styled.form`
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

