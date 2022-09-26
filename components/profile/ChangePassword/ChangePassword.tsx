import { Input, Button } from 'components';
import { PropsType } from './types';
import useChangePassword from './useChangePassword';

const ChangePassword: React.FC<PropsType> = (props) => {
  const { formik, t, router } = useChangePassword();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';

  return (
    <form className='bg-boxBg px-8 pt-6 pb-14 mt-6 flex flex-col rounded-xl'>
      <div className={`${languageFont} p-6 border border-lowBorder bg-menuBg`}>
        <h2 className={`font-normal text-sm leading-6 text-white`}>
          {t('Passwords should contain') + ':'}
        </h2>
        <div className='flex gap-x-2 items-center mt-4'>
          <span
            className={`w-1 h-1 rounded-full ${
              formik.errors['password'] || formik.values['password'] === ''
                ? 'bg-lowGray'
                : 'bg-hulk'
            }`}
          ></span>
          <span
            className={`${
              formik.errors['password'] || formik.values['password'] === ''
                ? 'text-lowGray'
                : 'text-white'
            }`}
          >
            {t('8 or more characters')}
          </span>
        </div>
        <div className='flex gap-x-2 items-center mt-1'>
          <span
            className={`w-1 h-1 rounded-full ${
              formik.errors['password'] || formik.values['password'] === ''
                ? 'bg-lowGray'
                : 'bg-hulk'
            }`}
          ></span>
          <span
            className={`${
              formik.errors['password'] || formik.values['password'] === ''
                ? 'text-lowGray'
                : 'text-white'
            }`}
          >
            {t('15 lowercase character')}
          </span>
        </div>
      </div>
      <label
        htmlFor='reset-password'
        className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-6 mr-auto`}
      >
        {t('Password')}
      </label>
      <Input
        id='reset-password'
        className='w-full'
        type='password'
        inputName='password'
        errors={formik.errors}
        touched={formik.touched['password']}
        dirty={formik.dirty}
        placeholder={t('Password')}
        value={formik.values['password']}
        handleChange={formik.handleChange}
      />
      <div
        className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
      >
        {t((formik.touched['password'] && formik.errors['password']) || '')}
      </div>
      <label
        htmlFor='confirm-password'
        className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-1 mr-auto`}
      >
        {t('Confirm password')}
      </label>
      <Input
        id='confirm-password'
        className='w-full'
        type='password'
        inputName='repeatPassword'
        errors={formik.errors}
        touched={formik.touched['repeatPassword']}
        dirty={formik.dirty}
        placeholder={t('Confirm password')}
        value={formik.values['repeatPassword']}
        handleChange={formik.handleChange}
      />
      <div
        className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
      >
        {t(
          (formik.touched['repeatPassword'] &&
            formik.errors['repeatPassword']) ||
            ''
        )}
      </div>
      <div
        id='change-password-controls'
        className={`mt-24 w-full flex justify-between items-center font-normal text-xs leading-5 text-white ${languageFont}`}
      >
        <Button
          id='close'
          type='button'
          className=''
          onClick={() => props.changeInfoBoxHandler('emails')}
        >
          {t('Cancel')}
        </Button>
        <Button
          id='reg-btn'
          className={`w-16 h-9 rounded bg-blood hover:bg-bloodHover text-white text-base font-normal leading-6 ${languageFont}`}
          type='submit'
        >
          {t('Add')}
        </Button>
      </div>
    </form>
  );
};

export default ChangePassword;
