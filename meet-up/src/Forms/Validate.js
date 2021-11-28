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
    password: Yup.string()
        .typeError('Must be a string.')
        .matches("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", 'Must contain 8 characters: uppercase, lowercase and number')
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
        .typeError('Must be a string.')
        .email('Please enter a valid email address.')
        .required('Valid email is required.'),
    password: Yup.string()
        .typeError('Must be a string.')
        .matches('/^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9]){8,}$/', 'Must contain 8 characters: uppercase, lowercase and number')
        .required('Please enter a password.'),
})

const FILE_SIZE = 1024 * 1024 * 4;
const SUPPORTED_FORMATS = [
    "image/jpeg",
    "image/png"
];

export const createEventValidationsSchema = Yup.object().shape({
    meetName: Yup.string().typeError('Must be a string.')
        .required('Valid first Meet Name is required.'),
    description: Yup.string().typeError('Must be a string.')
        .required('Please enter meet description.'),
    auto_address: Yup.string().typeError('Must be a string.')
        .required('Please enter meet address.'),
    file: Yup.mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        ),
    activities: Yup.array()
        .min(3,"choose min 3 activities")
});
