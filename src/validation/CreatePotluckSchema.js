import * as yup from 'yup';

export default yup.object().shape({
    Entree: yup
        .string(),
    Appetizer: yup
        .string(),
    Dessert: yup
        .string(),
    Drink: yup
        .string(),
    Extras: yup
        .string(),
    time: yup
        .string()
        .required('A time is required'),
    location: yup
        .string()
        .required('A location is required'),
    cover: yup
        .string()
        .oneOf(['Entree', 'Appetizer', 'Dessert', 'Drink', 'Extras'], 'Something must be chosen.'),
})