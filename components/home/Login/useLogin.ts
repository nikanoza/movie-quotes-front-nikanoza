import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { loginSchema } from 'schemas';
import { LoginFormesValues } from 'types';

const useLogin = () => {
  const { t } = useTranslation('landing');
  const router = useRouter();
  const initialValues: LoginFormesValues = {
    user: '',
    password: '',
    remember: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: loginSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik, t, router };
};

export default useLogin;
