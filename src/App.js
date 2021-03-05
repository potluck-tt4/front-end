import React, {useState} from "react";
import "./App.css";
import Header from '../src/components/Header'
import UserSignIn from '../src/components/UserSignIn'
import UserSignUp from '../src/components/UserSignUp'

const initialUser = []


function App() {
  const [user, setUser] = useState(initialUser)
 

  return (
    <div className="App">
      <Header />
      <UserSignIn/>
      <UserSignUp/>

    </div>
  );
}

export default App;
