import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import PotluckPage from '../PotluckPage'
import CreatePotluckSchema from '../validation/CreatePotluckSchema'
import Confirmation from './Confirmation'
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

    
    //Validation that input is correct



      //Submission values to be kept/reset

    
      //Validation for Button to become active

      useEffect(() => {
        CreatePotluckSchema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);



    const onChange = evt => {
        const { name, value } = evt.target
        changeHandler(name, value)
        setFormValues({ ...formValues, [name]: value })
    }
    
    return (

        
        


        <StyledCPF>

            <CreatePotLuckForm className='createPotluckForm' onSubmit={handleSubmit}>

                    <h2>Create Your Potluck</h2>
                <StyledCreateErrors className='createPotluckErrors'>

                    <div>{errors.time}</div>
                    <div>{errors.location}</div>
                </StyledCreateErrors>
                <div className='createPotluckItemsInput'>
                    <label>Entree Items

                        <input value={formValues.Entree}
                            onChange={onChange}
                            id='entID'
                            name='Entree'
                            type='text'
                            placeholder='Tacos..' />
                    </label><br />
                    <label>Appetizer Items
                        <input value={formValues.Appetizer}
                            onChange={onChange}
                            id='appID'
                            name='Appetizer'
                            type='text'
                            placeholder='Tostones..' />
                    </label><br />
                    <label>Dessert Items
                        <input value={formValues.Dessert}
                            onChange={onChange}
                            id='desID'
                            name='Dessert'
                            type='text'
                            placeholder='Tres Leches..' />
                    </label><br />
                    <label>Drink Items
                        <input value={formValues.Drink}
                            onChange={onChange}
                            id='driID'
                            name='Drink'
                            type='text'
                            placeholder='Margaritas..' />
                    </label><br />
                    <label>Extras Items
                        <input value={formValues.Extras}
                            onChange={onChange}
                            id='exID'
                            name='Extras'
                            type='text'
                            placeholder='Salsa Verde..' />

                    </label><br />

                </div>
                <StyledLoc className='locationInput'>
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
                </StyledLoc>
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

        </StyledCPF>

    )
}

export default CreatePotLuck

const CreatePotLuckForm = styled.form`
    width: 80%;
    padding: 2.5rem 0 2.5rem 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 0 10% 0;
    label, input {
    font-size: 1.6rem;
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
    transition: .5s;
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
        color: red;
    }
   
    
`

const StyledLoc = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

const StyledCPF = styled.div `
    background-color: #80bab5;
    opacity: 0.8;
    color: firebrick;
`;

const StyledCreateErrors = styled.div`
    background: khaki;
    color: chocolate;
`;

