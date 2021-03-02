import React from 'react'
import styled from 'styled-components';



const UserSignUp = (props) => {

    const { values, change, submit, disabled, errors } = props;
    //console.log('values',values);

    const onChange = event => {
        console.log('event target', event.target)
        const { name, value, type, checked } = event.target
        //const valToUse = type === 'checkbox' ? checked : values;
        change(name, value)
        
    }

    const onSubmit = event => {
        event.preventDefault();

        submit();
    }
    //console.log('values email',values.email)
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                    type='text'
                    name='nameUp'
                    values={values.nameUp}
                    onChange={onChange}
                    placeholder='Enter Name'
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