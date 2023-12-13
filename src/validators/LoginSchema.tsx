import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
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
});

export default LoginSchema;
