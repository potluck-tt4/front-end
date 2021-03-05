import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import ConfirmationSchema from '../validation/ConfirmationSchema'
import styled from 'styled-components'

const initialConfirmationForm = {
    //checkboxes
    going: false,
    notGoing: false,
    //text
    name: '',
};

const initialConfirmationErrors = {
    //checkboxes
    going: false,
    notGoing: true,
    //text
    name: '',
};

const initialConfirmation = [];
const initialDisable = true;

const Confirmation = (props) => {
    const [confirmation, setConfirmation] = useState(initialConfirmation)
    const [confirmationForm, setConfirmationForm] = useState(initialConfirmationForm)
    const [confirmationErrors, setConfirmationErrors] = useState(initialConfirmationErrors)
    const [disable, setDisable] = useState(initialDisable)

    const {values} = props

    
    const ConfirmationFormValidation = (name, value) => {
        yup.reach(ConfirmationSchema, name)
        .validate(value)
        .then(() => {
            setConfirmationErrors({...confirmationErrors, [name]: ''})
        })
        .catch(err => {
            setConfirmationErrors({...confirmationErrors, [name]: err.errors[0]})
        })
        setConfirmationForm({...confirmationForm, [name]: value})
    }

    const formSubmit = () => {
        const newConfirmation = {
            //checkboxes
            rsvp: ['Going', 'Not Going'].filter(rsvp => confirmationForm[rsvp]),
            //text
            name: confirmationForm.name
        }
        setConfirmation(confirmation.concat(newConfirmation)) 
        setConfirmationForm(initialConfirmationForm)
    };

    useEffect(() => {
        ConfirmationSchema.isValid(confirmationForm).then(valid => setDisable(!valid))
    }, [confirmationForm]);

    const Changer = (evt) => {
        const { name, value, type, checked } = evt.target 
        const valueToUse = type === 'checkbox' ? checked : value 
        ConfirmationFormValidation(name, valueToUse)
    }

    return (
        <div>
            <ConfirmationForm className= 'ConfirmationForm' onSubmit={formSubmit}>
                <h2>We'd like to formally invite you to a Potluck at {values.location} on {values.time}</h2>
                    <StyledConfirmationErrors className='ConfirmationErrors'>
                        <div>{confirmationErrors.name}</div>
                        <div>{confirmationErrors.going}</div>
                    </StyledConfirmationErrors>
                <div className='RSVP'>
                    <label>Name:
                        <input 
                        type='text' 
                        name='name'
                        onChange={Changer} 
                        value={confirmationForm.name}
                        placeholder='Your name(s) here..' />
                    </label>
                    <label>I can make it! 🥳
                        <input 
                        type='checkbox' 
                        name='going' 
                        onChange={Changer}
                        checked={confirmationForm.going} 
                        />
                    </label>
                    <label> I can't make it ☹️
                        <input 
                        type='checkbox' 
                        name='notGoing'
                        onChange={Changer}
                        checked={confirmationForm.notGoing} 
                        />
                    </label>
                    <button id='confirmationBtn' disabled={disable}>Fun is just a click away</button>
                </div>
            </ConfirmationForm>
            
        </div>
    )
}

export default Confirmation


const ConfirmationForm = styled.form`
    width: 100%;
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
    background-color: darkseagreen;
    transition: .3s;
    cursor: pointer;
    &:hover{
        background-color: rgba(33, 66, 150, 0.9);
        }
    label {
       background-color: slateblue;
       text-align:center;
    }
    input {
        text-align:center;
        border: 2px solid red;
        border-radius: 10px;
    }
   `

   const StyledConfirmationErrors = styled.div`
    background: khaki;
    color: chocolate;
`;
