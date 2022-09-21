import { FormikErrors, FormikHandlers, FormikTouched } from 'formik';

export type RegistrationFormValues = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export type ForgotPasswordFormValues = {
  email: string;
};

export type PasswordResetFormValues = {
  password: string;
  repeatPassword: string;
};

export type FormikInput = {
  id: string;
  inputName: string;
  errors: FormikErrors;
  value?: string;
  defaultValue?: string;
  type: string;
  className: string;
  touched: FormikTouched;
  placeholder: string;
  dirty: boolean;
  handleChange: FormikHandlers['handleChange'];
};
