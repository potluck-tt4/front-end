
import React, {useState} from "react";
import "./App.css";
import Header from '../src/components/Header'
import UserSignIn from '../src/components/UserSignIn'
import UserSignUp from '../src/components/UserSignUp'
import PotluckPage from "./PotluckPage";
import CreatePotLuck from "../src/components/CreatePotLuck";
import { Route } from "react-router-dom";
import PrivateRoute from "../src/components/PrivateRoute";






function App() {


  return (
    <div className="App">

      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/CreatePotluckPage">
        <UserSignIn
         
        />
      </Route>
      <Route>
        <UserSignUp
         
        />
      </Route>
      <Route exact path="/PotluckPage">
        <PotluckPage />
      </Route>

      <PrivateRoute exact path="CreatePotluck" component={CreatePotLuck} />

    </div>
  );
}

export default App;
