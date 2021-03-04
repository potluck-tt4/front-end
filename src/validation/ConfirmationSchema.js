import * as yup from 'yup'

const ConfirmationSchema = yup.object().shape({
    name: yup.string()
    .required('Please provide a name')
    .min(2, 'Name must be at least 2 characters long'),
    going: yup
    .boolean()
    .oneOf([true], 'Please come'),
    notGoing: yup.boolean()
})
export default ConfirmationSchema