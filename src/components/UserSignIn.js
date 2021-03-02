import React from 'react'
import CreatePotLuck from './CreatePotLuck'
import styled from 'styled-components'

const UserSignIn = (props) => {

    const { values, change, submit, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type } = evt.target
        change(name, value)
    }

    return (
        <div>
            <h2>Log In</h2>
            <form className='signInForm' onSubmit={onSubmit}>
                <div className='signInErrors'>
                    <div>{errors.name}</div>
                    <div>{errors.secondPass}</div>
                </div>
                <SignInContainer className='signInInputs'>
                    <label>Name:
                    <input
                            value={values.name}
                            onChange={onChange}
                            id='nameID'
                            name='name'
                            type='text'
                            placeholder='Name..' />
                    </label>
                    <label>Password:
                    <input
                            value={values.secondPass}
                            onChange={onChange}
                            id='passwordID'
                            name='secondPass'
                            type='password'
                            placeholder='Password..' />
                    </label>
                    <button id='signInBtn' disabled={disabled}>Sign In</button>
                </SignInContainer>
            </form>

            <CreatePotLuck />
        </div>
    )
}

export default UserSignIn

const SignInContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-between;
`;