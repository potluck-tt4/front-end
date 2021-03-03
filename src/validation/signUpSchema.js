import * as yup from "yup";

export default yup.object().shape({

    name: yup
    .string()
    .required('Name is required'),
    password: yup
    .string()
    .required('Password for signup is required'),
})

