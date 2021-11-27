import * as Yup from 'yup';

const validationsSchema = Yup.object().shape({
    firstName: Yup.string().typeError('Must be a string.')
        .required('Valid first name is required.'),
    lastName: Yup.string().typeError('Must be a string.')
        .required('Valid last name is required.'),
    email: Yup.string().email('Please enter a valid email address for shipping updates.')
        .matches('/^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/', "Invalid email format.")
        .typeError('Must be a string.')
        .required('Valid email is required.'),
    phone: Yup.string().matches('^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$', 'Invalid phone format.'),
    password: Yup.string().typeError('Must be a string.')
        .required('Please enter your shipping address.')
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9]){8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"),
    confirmPassword: Yup.string().typeError('Must be a string.')
        .required('Provide a valid state.').test('passwords-match', 'Passwords must match', value => {
            return this.parent.password === value
        })
})
