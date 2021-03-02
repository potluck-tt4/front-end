import React from 'react'
// import * as yup from 'yup'
// import PotluckPageSchema from './validation/PotluckPageSchema'


// const initialUserFormValues = {
//     cover: '',
// }

// const initialUserFormErrors = {
//     cover: '',
// }

// const initialUserForm = []
// const initialDisabled = true 

const PotluckPage = (props) => {

    const { values, change, submit, disabled, errors } = props
    
    //console.log('potluckpage details prop', props)
    // const [userForm, setUserForm] = useState(initialUserForm)
    // const [userFormValues, setUserFormValues] = useState(initialUserFormValues) 
    // const [userFormErrors, setUserFormErrors] = useState(initialUserFormErrors) 
    // const [disabled, setDisabled] = useState(initialDisabled)


    /*if (!details) {
        return <h3>Working on lucking the pot...</h3>
    }
    */
    // (!values) ? <h3>Working on lucking the pot... </h3> : console.log(values);

    // const handleChange = (name, value) => {
    //     yup
    //     .reach(PotluckPageSchema, name)
    //     .validate(value)
    //     .then(() => {
    //       setUserFormErrors({...userFormErrors, [name]: "",
    //     });
    //   })
    //   .catch(err => {
    //     setUserFormErrors({...userFormErrors, [name]: err.userFormErrors[0]
    //     });
    //   })
    
    //     setUserFormValues({
    //       ...userFormValues, [name]: value
    //     })
    //   };

      //Submission values to be kept/reset

    //   const handleSubmit = (evt) => {
    //         evt.preventDefault();
    //     const newUserForm = {
    //       Entree: userFormValues.Entree.trim(),
    //       Appetizer: userFormValues.Appetizer.trim(),
    //       Dessert: userFormValues.Dessert.trim(),
    //       Drink: userFormValues.Drink.trim(),
    //       Extras: userFormValues.Extras.trim(),
    //     }
    //     setUserForm(userForm.concat(newUserForm))
    //     setUserFormValues(initialUserFormValues)
    //   }
    
      //Validation for Button to become active
      
    //   useEffect(() => {
    //     PotluckPageSchema.isValid(userFormValues).then((valid) => {
    //       setDisabled(!valid);
    //     });
    //   }, [userFormValues]);
      


    //   const onSubmit = evt => {
    //     evt.preventDefault()
    //     submit()
    //     }
    
    // const onChange = evt => {
    //     const { name, value, type } = evt.target
    //     // handleChange(name, value)
    //     setUserFormValues({...userFormValues, [name]: value})
    //     }


    return (
        <div>
            <h2>{values.time}{values.location}</h2>
            <div className='userFormErrors'>
                <div>{errors.cover}</div>
            </div>
            <form className='potluckPageForm' onSubmit={submit}>
                <div className='userEntreeRadio'>
                    <input 
                    type='radio' 
                    name='cover'
                    onChange={change}
                    value='Entree'
                    checked={values.cover === 'Entree'}
                    />
                    {values.Entree}
                </div>
                <div className='userAppetizerRadio'>
                    <input 
                    type='radio' 
                    name='cover'
                    onChange={change}
                    value='Appetizer'
                    checked={values.cover === 'Appetizer'}
                    />
                    {values.Appetizer}
                </div>
                <div className='userDessertRadio'>
                    <input 
                    type='radio' 
                    name='cover'
                    onChange={change}
                    value='Dessert'
                    checked={values.cover === 'Dessert'}
                    />
                    {values.Dessert}
                </div>
                <div className='userDrinkRadio'>
                    <input 
                    type='radio' 
                    name='cover'
                    onChange={change}
                    value='Drink'
                    checked={values.cover === 'Drink'}
                    />
                    {values.Drink}
                </div>
                <div className='userExtraRadio'>
                    <input 
                    type='radio' 
                    name='cover'
                    onChange={change}
                    value='Extras'
                    checked={values.cover === 'Extras'}
                    />
                    {values.Extra}
                </div>

                <button disabled={disabled}>Submit</button>
                
            </form>
            
        </div>
    )
}

export default PotluckPage
