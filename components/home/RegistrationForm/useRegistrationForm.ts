import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { registrationSchema } from 'schemas';
import { RegistrationFormValues } from 'types';

const useRegistrationForm = () => {
  const { t } = useTranslation('landing');
  const router = useRouter();
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

  return { formik, t, router };
};

export default useRegistrationForm;
