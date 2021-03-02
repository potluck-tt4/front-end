import * as yup from 'yup';

export default yup.object().shape({
    cover: yup.string()
    .oneOf(['Entree', 'Appetizer', 'Dessert', 'Drink', 'Extras'], 'Something must be chosen.')
})

//NOT USING ATM