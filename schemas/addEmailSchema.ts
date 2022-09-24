import * as Yup from 'yup';

const addEmailSchema = Yup.object({
  email: Yup.string()
    .required('email is required')
    .email("don't matches email format"),
});

export default addEmailSchema;
