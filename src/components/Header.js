import React from 'react';
import styled from 'styled-components';




export default function Header() {
    return (
        <Jumbotron>

            <nav>
                <div className='header'>
                    <StyledH1>PotLuck 🍀</StyledH1>
                    <div className='buttons'>
                        <button className='homeBtn'>Home</button>
                        <button className='signIn'>Sign In</button>
                        <button className='signUp'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </Jumbotron>
    )
}

const backgroundImage = 'https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg';

const Jumbotron = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    
    button{
        position: relative;
        top: 5.5rem;
        padding: 0.8rem 1rem 0.8rem 1rem;
        border-radius: 25px;
        border: 1px solid #FFFFFF;
        font-weight: bold;
        background-color: rgba(33, 33, 33, 0.5);
        color: #FFFFFF;
        transition: .3s;
        cursor: pointer;
        &:hover{
            background-color: rgba(33, 66, 150, 0.9);
        }
    }
`

const StyledH1 = styled.h1`
    font-size: 3rem;

`