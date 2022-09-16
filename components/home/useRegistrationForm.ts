import { useFormik } from 'formik';
import { registrationSchema } from 'schemas';
import { RegistrationFormValues } from 'types';

export const useRegistrationForm = () => {
  const initialValues: RegistrationFormValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values: RegistrationFormValues) => {
      console.log(values);
    },
    validationSchema: registrationSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik };
};
