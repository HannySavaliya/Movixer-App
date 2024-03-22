import * as yup from 'yup'

export const REGISTRATION_SCHEMA = yup.object({
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    email: yup.string().email('Invalid email address').required('Please enter email'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Required')
})