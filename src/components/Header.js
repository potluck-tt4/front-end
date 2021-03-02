import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const backgroundImage =
  "https://hips.hearstapps.com/ell.h-cdn.co/assets/15/52/1450738482-elle-potluck-04-getty.jpg";

export default function Header() {
  return (
    <Router>
      <Jumbotron>
        <nav>
          <div className="header">
            <StyledH1>PotLuck 🍀</StyledH1>
            <div className="buttons">
              <Link to="/">
                <button className="homeBtn">Home</button>
              </Link>
              <Link to="/UserSignIn">
                <button className="signIn">Sign In</button>
              </Link>
              <Link to="UserSignUp">
                <button className="signUp">Sign Up</button>
              </Link>
            </div>
          </div>
        </nav>
      </Jumbotron>
    </Router>
  );
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

  button {
    position: relative;
    top: 5.5rem;
    padding: 0.8rem 1rem 0.8rem 1rem;
    border-radius: 25px;
    border: 1px solid #ffffff;
    font-weight: bold;
    background-color: rgba(33, 33, 33, 0.5);
    color: #ffffff;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: rgba(33, 66, 150, 0.9);
    }
  }
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
`;
