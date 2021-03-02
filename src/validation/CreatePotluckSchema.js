import * as yup from 'yup';

export default yup.object().shape({
    Entree: yup
    .string().trim(), 
    Appetizer: yup
    .string().trim(),
    Dessert: yup
    .string().trim(),
    Drink: yup
    .string().trim(),
    Extras: yup
    .string().trim(),
    time: yup
    .string()
    .trim()
    .required('A time is required'),
    location: yup
    .string()
    .trim()
    .required('A location is required'),
    cover: yup
    .string()
    .trim()
    .oneOf(['Entree', 'Appetizer', 'Dessert', 'Drink', 'Extras'], 'Something must be chosen.'),
})