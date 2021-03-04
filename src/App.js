




// const initialFormValues = {
//   name: '',
//   nameUp: '',
//   password: '',
//   secondPass: '',
// }

// const initialFormErrors = {
//   name: '',
//   nameUp: '',
//   password: '',
//   secondPass: '',
// }

const initialUser = []
// const initialDisabled = true

import Header from "../src/components/Header";
import UserSignIn from "../src/components/UserSignIn";
import UserSignUp from "../src/components/UserSignUp";
import PotluckPage from "./PotluckPage";
import CreatePotLuck from "../src/components/CreatePotLuck";
import { Route } from "react-router-dom";
import PrivateRoute from "../src/components/PrivateRoute";





function App() {
  const [user, setUser] = useState(initialUser)
  // const [formValues, setFormValues] = useState(initialFormValues)
  // const [errors, setErrors] = useState(initialFormErrors)
  // const [disabled, setDisabled] = useState(initialDisabled)

  //Validation Handler - validating changes


  // const handleChange = (name, value) => {
  //   yup
  //     .reach(formSchema, name)
  //     .validate(value)
  //     .then(() => {
  //       setErrors({
  //         ...errors, [name]: "",
  //       });
  //     })
  //     .catch(err => {
  //       setErrors({
  //         ...errors, [name]: err.errors[0]
  //       });
  //     })

  //   setFormValues({
  //     ...formValues, [name]: value
  //   })
  // };

  // /// Submit Handler - handles submits

  // const handleSubmit = () => {
  //   const newUser = {
  //     name: formValues.name,
  //     password: formValues.password,
  //   }
  //   setUser(user.concat(newUser))
  //   setFormValues(initialFormValues)
  // }



  // //Side Efffect - Handle Button Status


  // useEffect(() => {
  //   formSchema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div className="App">

      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/UserSignIn">
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
