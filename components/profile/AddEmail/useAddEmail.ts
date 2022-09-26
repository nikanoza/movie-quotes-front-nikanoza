import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { addEmailSchema } from 'schemas';
import { EmailFormValues } from 'types';

const useAddEmail = () => {
  const { t } = useTranslation('profile');
  const router = useRouter();
  const initialValues: EmailFormValues = {
    email: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: addEmailSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik, t, router };
};

export default useAddEmail;
