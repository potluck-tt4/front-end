import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("User name is required"),
  //   email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});
