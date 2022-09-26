import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { forgotPasswordSchema } from 'schemas';
import { EmailFormValues } from 'types';

const useForgotPassword = () => {
  const { t } = useTranslation('landing');
  const router = useRouter();
  const initialValues: EmailFormValues = {
    email: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: forgotPasswordSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik, t, router };
};

export default useForgotPassword;
