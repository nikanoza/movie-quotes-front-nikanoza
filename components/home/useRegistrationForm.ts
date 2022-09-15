import { useFormik } from 'formik';
// import { useRouter } from 'next/router';
import { registrationSchema } from 'schemas';
import { RegistrationFormValues } from 'types';

export const useRegistrationForm = () => {
  //   const router = useRouter();
  const initialValues: RegistrationFormValues = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: registrationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
  });

  return { formik };
};
