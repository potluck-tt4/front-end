import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('Name is required'),
    nameUp: yup
    .string()
    .required('Name for signup is required'),
    password: yup
    .string()
    .required('Password for signup is required'),
    secondPass: yup
    .string()
    .required('Password is required'),

})