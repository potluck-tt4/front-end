
import React from 'react'

const PotluckPage = (props) => {

    const { values, change, submit, disabled, errors } = props




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