import * as Yup from 'yup';

const passwordResetSchema = Yup.object({
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

export default passwordResetSchema;
