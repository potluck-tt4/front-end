import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import PotluckPage from '../PotluckPage'
import CreatePotluckSchema from '../validation/CreatePotluckSchema'


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
          setErrors({...errors, [name]: "",
        });
      })
      .catch(err => {
        setErrors({...errors, [name]: err.errors[0]
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
          Entree: formValues.Entree.trim(),
          Appetizer: formValues.Appetizer.trim(),
          Dessert: formValues.Dessert.trim(),
          Drink: formValues.Drink.trim(),
          Extras: formValues.Extras.trim(),
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
        const { name, value, type } = evt.target
        // changeHandler(name, value)
        setFormValues({...formValues, [name]: value})
        }
            console.log(formValues)
    return (
        <div>
            <form className='createPotluckForm' onSubmit={handleSubmit}>
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
            </form>
            {/* {
                potluckInfo.map(plI => {
                    return(
                        <PotluckPage key={plI.id} details={plI}/>
                    )
                })
                } */}
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