import { FormikErrors, FormikHandlers, FormikTouched } from 'formik';

export type RegistrationFormValues = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type FormikInput = {
  id: string;
  inputName: string;
  onChange?: FormikHandlers['handleChange'];
  errors: FormikErrors;
  value: string;
  type: string;
  className: string;
  touched: FormikTouched;
  placeholder: string;
  dirty: boolean;
};
