
import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required').min(2, 'Name must be at least 2 characters.'),
    password: yup
        .string()
        .required('Password for signup is required')
        .min(5, 'Password must be at least 5 characters wrong.'),
})

