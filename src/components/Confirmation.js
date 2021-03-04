import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import ConfirmationSchema from '../validation/ConfirmationSchema'

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
    const [confirmation, setConfirmation] = useState(initialConfirmationForm)
    const [confirmationForm, setConfirmationForm] = useState(initialConfirmationForm)
    const [confirmationErrors, setConfirmationErrors] = useState(initialConfirmationErrors)
    const [disable, setDisable] = useState(initialDisable)

    const {values} = props

    // maybe switch name: '' to name: false if not working
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
            <form className= 'ConfirmationForm' onSubmit={formSubmit}>
                <h2>We'd like to formally invite you to a Potluck at {values.location} on {values.time}</h2>
                    <div className='ConfirmationErrors'>
                        <div>{confirmationErrors.name}</div>
                        <div>{confirmationErrors.going}</div>
                    </div>
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
            </form>
            
        </div>
    )
}

export default Confirmation
