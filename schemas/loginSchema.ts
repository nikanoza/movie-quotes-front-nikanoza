import * as Yup from 'yup';

const loginSchema = Yup.object({
  user: Yup.string()
    .required('username is required')
    .min(3, 'username must have minimum 2 characters'),
  password: Yup.string().required('password is required'),
  remember: Yup.boolean(),
});

export default loginSchema;
