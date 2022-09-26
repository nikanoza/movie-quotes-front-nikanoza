import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { changeNameSchema } from 'schemas';
import { NameFormValues } from 'types';

const useChangeName = () => {
  const { t } = useTranslation('profile');
  const router = useRouter();
  const initialValues: NameFormValues = {
    name: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema: changeNameSchema,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: true,
  });

  return { formik, t, router };
};

export default useChangeName;
