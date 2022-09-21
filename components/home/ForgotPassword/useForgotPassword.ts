import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { registrationSchema } from 'schemas';
import { ForgotPasswordFormValues } from 'types';

const useForgotPassword = () => {
  const { t } = useTranslation('landing');
  const router = useRouter();
  const initialValues: ForgotPasswordFormValues = {
    email: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: registrationSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik, t, router };
};

export default useForgotPassword;
