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
