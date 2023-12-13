import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 'Invalid email format')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    )
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{8}$/, 'Invalid phone number format')
    .required('Required'),
});

export default SignUpSchema;
