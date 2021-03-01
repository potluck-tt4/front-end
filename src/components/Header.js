import React from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';


const backgroundImage = 'https://images.unsplash.com/photo-1561350111-7daa4f284bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

export default function Header(){
    return(
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