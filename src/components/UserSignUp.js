import React from 'react'
import styled from 'styled-components';



const UserSignUp = (props) => {

    const { values, change, submit, disabled, errors } = props;
    console.log('values',values);

    const onChange = event => {
        console.log('event target', event.target)
        const { name, value, type, checked } = event.target
        const valToUse = type === 'checkbox' ? checked : values;
        change(name, valToUse)
    }

    const onSubmit = event => {
        event.preventDefault();

        submit();
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                    type='text'
                    name='name'
                    values={values.name}
                    onChange={onChange}
                    placeholder='Enter Name'
                    />
                </label>
                <label>Email:
                    <input 
                    type='email' 
                    name='email' 
                    value={values.email}
                    onChange={onChange}
                    placeholder='Enter email here...'
                    />
                </label>
                <label>Password: <br/>
                    <input 
                    type='password' 
                    name='password' 
                    value={values.password} 
                    onChange={onChange}
                    placeholder='Enter password here...'
                    />
                </label>
                <label>Confirm Password: <br/>
                    <input 
                    type='password' 
                    name='password' 
                    value={values.password} 
                    onChange={onChange}
                    
                    />
                </label>

                <button type='submit' disabled={disabled}>Sign Me Up</button>

            </form>
        </div>
    )
}

export default UserSignUp




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