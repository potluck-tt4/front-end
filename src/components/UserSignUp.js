import React from 'react'
import styled from 'styled-components';



const UserSignUp = (props) => {

    const { values, change, submit, disabled, errors } = props;

    const onChange = event => {
        console.log('event target', event.target)
        const { name, value, type, checked } = event.target
        const valToUse = type === 'checkbox' ? checked : values;
        change(name, valToUse)
    }

    return (
        <FormContainer>
            <StyledH2>Sign Up</StyledH2>
            
        </FormContainer>
    )
}

export default UserSignUp


const FormContainer = styled.

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