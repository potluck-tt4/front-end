import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    nameUp: yup
        .string()
        .required('Name for signup is required')
        .min(5, 'Name must be at least 2 characters'),
    password: yup
        .string()
        .required('Password for signup is required')
        .min(5, 'Password must be at least 5 characters wrong.'),
    secondPass: yup
        .string()
        .required('Password is required'),


})