import Yup from 'yup';

const registrationSchema = Yup.object({
  username: Yup.string()
    .required('username is required')
    .min(2, 'username must have minimum 2 characters')
    .max(15, 'username must have maximum 15 characters')
    .matches(
      /^[a-z0-9]*$/,
      'username must contain only lower english letters and numbers'
    ),
  email: Yup.string()
    .required('email is required')
    .email("don't matches email format"),
  password: Yup.string()
    .required('password is required')
    .min(8, 'password must have minimum 2 characters')
    .max(15, 'password must have maximum 15 characters')
    .matches(
      /^[a-z0-9]*$/,
      'password must contain only lower english letters and numbers'
    ),
  repeatPassword: Yup.string()
    .required('This field is required')
    .oneOf([Yup.ref('password'), null], "password didn't match"),
});

export default registrationSchema;
