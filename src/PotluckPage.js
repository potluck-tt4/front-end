import React from 'react'
import styled from 'styled-components'

const PotluckPage = (props) => {

    const { values, change, submit, disabled, errors } = props




    return (
        <div>
            <PotluckPageForm className='potluckPageForm' onSubmit={submit}>
            <h2>{values.time}{values.location}</h2>
            <StyledPotluckErrors className='userFormErrors'>
                <div>{errors.cover}</div>
            </StyledPotluckErrors>
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

            </PotluckPageForm>

        </div>
    )
}

export default PotluckPage


const PotluckPageForm = styled.form`
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
const StyledPotluckErrors = styled.div`
    background: khaki;
    color: chocolate;
`;