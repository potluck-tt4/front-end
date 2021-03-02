import * as yup from 'yup';

export default yup.object().shape({
    time: yup
    .string()
    .required('A time is required'),
    location: yup
    .string()
    .required('A location is required'),
})