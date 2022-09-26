import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { passwordResetSchema } from 'schemas';
import { PasswordResetFormValues } from 'types';

const useChangePassword = () => {
  const { t } = useTranslation('profile');
  const router = useRouter();
  const initialValues: PasswordResetFormValues = {
    password: '',
    repeatPassword: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: passwordResetSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik, t, router };
};

export default useChangePassword;
