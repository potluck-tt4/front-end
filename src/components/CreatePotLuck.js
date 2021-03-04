import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import PotluckPage from '../PotluckPage'
import Confirmation from './Confirmation'
import CreatePotluckSchema from '../validation/CreatePotluckSchema'
import styled from 'styled-components'


const initialFormValues = {
    Entree: '',
    Appetizer: '',
    Dessert: '',
    Drink: '',
    Extras: '',
    time: '',
    location: '',
    cover: '',

}

const initialErrors = {
    Entree: '',
    Appetizer: '',
    Dessert: '',
    Drink: '',
    Extras: '',
    time: '',
    location: '',
    cover: '',
}


const initialPotluckInfo = []
const initialDisabled = true

const CreatePotLuck = () => {
    const [potluckInfo, setPotluckInfo] = useState(initialPotluckInfo)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    //Validation that input is correct

    const changeHandler = (name, value) => {
        yup
            .reach(CreatePotluckSchema, name)
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

    //Submission values to be kept/reset

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newPotluckInfo = {
            Entree: formValues.Entree,
            Appetizer: formValues.Appetizer,
            Dessert: formValues.Dessert,
            Drink: formValues.Drink,
            Extras: formValues.Extras,
        }
        setPotluckInfo(potluckInfo.concat(newPotluckInfo))
        setFormValues(initialFormValues)
    }

    //Validation for Button to become active

    useEffect(() => {
        CreatePotluckSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);



    //   const onSubmit = evt => {
    //     evt.preventDefault()
    //     submit()
    //     }

    const onChange = evt => {
        const { name, value } = evt.target
        changeHandler(name, value)
        setFormValues({ ...formValues, [name]: value })
    }
    console.log(formValues)
    return (
        <div>
            <CreatePotLuckForm className='createPotluckForm' onSubmit={handleSubmit}>
                <div className='createPotluckErrors'>
                    <h2>Creat Your Potluck</h2>
                    <div>{errors.time}</div>
                    <div>{errors.location}</div>
                </div>
                <div className='createPotluckItemsInput'>
                    <label>Entree Items
                        <input value={formValues.Entree}
                            onChange={onChange}
                            id='entID'
                            name='Entree'
                            type='text'
                            placeholder='Tacos..' />
                    </label>
                    <label>Appetizer Items
                        <input value={formValues.Appetizer}
                            onChange={onChange}
                            id='appID'
                            name='Appetizer'
                            type='text'
                            placeholder='Tostones..' />
                    </label>
                    <label>Dessert Items
                        <input value={formValues.Dessert}
                            onChange={onChange}
                            id='desID'
                            name='Dessert'
                            type='text'
                            placeholder='Tres Leches..' />
                    </label>
                    <label>Drink Items
                        <input value={formValues.Drink}
                            onChange={onChange}
                            id='driID'
                            name='Drink'
                            type='text'
                            placeholder='Margaritas..' />
                    </label>
                    <label>Extras Items
                        <input value={formValues.Extras}
                            onChange={onChange}
                            id='exID'
                            name='Extras'
                            type='text'
                            placeholder='Salsa Verde..' />
                    </label>
                </div>
                <div className='locationInput'>
                    <label>Enter a sweet time for your bangin Potluck
                        <input vlaue={formValues.time}
                            onChange={onChange}
                            id='potluckID'
                            name='time'
                            type='datetime-local'
                            min='0001-01-01T00:00'
                            max='5000-12-26T00:00' />
                    </label>
                    <label>Where should people meet?
                        <input value={formValues.location}
                            onChange={onChange}
                            id='locID'
                            name='location'
                            type='text'
                            placeholder="Ryan's kickback.." />
                    </label>
                    <button id='createPotluckBtn' disabled={disabled}>POTLUCK</button>
                </div>
            </CreatePotLuckForm>
            <Confirmation 
            values={formValues}
            />
            <PotluckPage
                values={formValues}
                change={onChange}
                submit={handleSubmit}
                disabled={disabled}
                errors={errors}
            />
        </div>
    )
}

export default CreatePotLuck
//input values need to be changed

const CreatePotLuckForm = styled.form`
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