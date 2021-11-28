import * as Yup from 'yup'

export const registerValidationsSchema = Yup.object().shape({
    firstName: Yup.string()
        .typeError('Must be a string.')
        .required('Valid first name is required.'),
    lastName: Yup.string()
        .typeError('Must be a string.')
        .required('Valid last name is required.'),
    email: Yup.string()
        .typeError('Must be a string.')
        .email('Please enter a valid email address.')
        .required('Valid email is required.'),
    phone: Yup.string()
        .matches('/^\\+380[1-9]{9}$/', 'Invalid phone format.')
        .required('Valid phone number is required.'),
    password: Yup.string()
        .typeError('Must be a string.')
        /*.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9]){8,}$/, 'Must contain 8 characters: uppercase, lowercase and number')*/
        .required('Please enter a password.'),
    confirmPassword: Yup.string()
        .typeError('Must be a string.')
        .required('Provide a valid state.')
        .test('passwords-match', 'Passwords must match', function(value) {
            return this.parent.password === value
        })
})

export const loginValidationsSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email address.')
        .typeError('Must be a string.')
        .required('Valid email is required.'),
    password: Yup.string()
        .typeError('Must be a string.')
        .required('Please enter a password.'),
})

export const createMeetValidationsSchema = Yup.object().shape({
    meetName: Yup.string().typeError('Must be a string.')
        .required('Valid first Meet Name is required.'),
    description: Yup.string().typeError('Must be a string.')
        .required('Please enter meet description.'),
    auto_address: Yup.string().typeError('Must be a string.')
        .required('Please enter meet address.'),
});
