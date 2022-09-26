import * as Yup from 'yup';

const changeNameSchema = Yup.object({
  name: Yup.string()
    .required('username is required')
    .min(2, 'username must have minimum 2 characters')
    .max(15, 'username must have maximum 15 characters')
    .matches(
      /^[a-z0-9]*$/,
      'username must contain english letters and numbers only'
    ),
});

export default changeNameSchema;
