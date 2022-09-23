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

export type LoginFormesValues = {
  user: string;
  password: string;
  remember: string | boolean;
};

export type FormikInput = {
  id: string;
  inputName: string;
  errors: FormikErrors;
  value?: string | boolean;
  defaultValue?: string | number | readonly string[] | undefined;
  type: string;
  className: string;
  touched: FormikTouched;
  placeholder?: string;
  dirty: boolean;
  handleChange: FormikHandlers['handleChange'];
};
