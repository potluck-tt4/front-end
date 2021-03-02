import React from 'react'
import styled from 'styled-components';


const backgroundImage = 'https://media1.popsugar-assets.com/files/thumbor/duzrUaRe0-pnPd3CvaG0CqCwRbI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/06/29/925/n/1922398/08973f82_42-53706616.jpg'

const UserSignUp = (props) => {

    const { values, change, submit, disabled, errors } = props;
    //console.log('values',values);

    const onChange = event => {
        console.log('event target', event.target)
        const { name, value, type, checked } = event.target
        //const valToUse = type === 'checkbox' ? checked : values;
        change(name, value)

    }

    const onSubmit = event => {
        event.preventDefault();

        submit();
    }
    //console.log('values email',values.email)
    return (
        <SignUpContainer>
            <h2>Sign Up</h2>
            <Form onSubmit={onSubmit}>
                <label>Name: <br />
                    <input
                        type='text'
                        name='nameUp'
                        values={values.nameUp}
                        onChange={onChange}
                        placeholder='Enter Name'
                    />
                </label>
                <label>Password: <br />
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                        placeholder='Enter password here...'
                    />
                </label>

                <button type='submit' disabled={disabled}>Sign Me Up</button>

            </Form>
        </SignUpContainer>
    )
}

export default UserSignUp

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
    background-image: url(${backgroundImage});
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


const Form = styled.form`
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

