import { Modal, Input, Button } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { PropsType } from './types';
import useLogin from './useLogin';

const RegistrationForm: React.FC<PropsType> = (props) => {
  const { formik, t, router } = useLogin();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <Modal close={() => props.modalChangeHandler('')}>
      <form
        className='w-full h-full md:w-150 md:h-176 md:mx-auto md:my-auto pt-20 lg:pt-5 pb-4 px-11 bg-darkBlue flex flex-col items-center'
        onSubmit={(e) => {
          formik.validateOnChange = true;
          formik.handleSubmit(e);
        }}
      >
        <h2
          className={`font-medium leading-7 text-2xl lg:text-3xl text-white ${languageFont}`}
        >
          {t('Log in to your account')}
        </h2>
        <h3
          className={`font-normal leading-6 text-xs lg:text-xl text-lowGray mt-3 ${languageFont}`}
        >
          {t('Welcome back! Please enter your details.')}
        </h3>
        <label
          htmlFor='login-user'
          className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-8 mr-auto`}
        >
          {t('User')}
        </label>
        <Input
          id='login-user'
          className='w-full'
          type='text'
          inputName='user'
          errors={formik.errors}
          touched={formik.touched['user']}
          dirty={formik.dirty}
          placeholder={t('Enter your name or email')}
          value={formik.values['user']}
          handleChange={formik.handleChange}
        />
        <div
          className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
        >
          {t((formik.touched['user'] && formik.errors['user']) || '')}
        </div>
        <label
          htmlFor='login-password'
          className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-1 mr-auto`}
        >
          {t('Password')}
        </label>
        <Input
          id='login-password'
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
        <div
          id='remember-box'
          className='w-full flex justify-between items-center'
        >
          <div id='remember-check' className='flex gap-x-2 items-center'>
            <Input
              id='login-check'
              className='-mt-2'
              type='checkbox'
              inputName='password'
              errors={formik.errors}
              touched={formik.touched['remember']}
              dirty={formik.dirty}
              value={formik.values['password']}
              handleChange={formik.handleChange}
            />
            <label
              htmlFor='login-check'
              className={`text-xs lg:text-xl font-normal leading-6 ${languageFont} text-white whitespace-nowrap`}
            >
              {t('Remember me')}
            </label>
          </div>
          <Link href={''} className=''>
            <span className='underline text-link'>{t('Forgot password')}</span>
          </Link>
        </div>
        <Button
          id='reg-btn'
          className={`w-full h-9 rounded bg-blood hover:bg-bloodHover mt-2 text-white text-base font-normal leading-6 ${languageFont}`}
          type='submit'
        >
          {t('Sign in')}
        </Button>
        <Button
          id='google-btn'
          className={`w-full flex gap-x-2 justify-center items-center h-9 rounded mt-4 text-white text-base font-normal leading-6 border border-fGray ${languageFont}`}
          type='button'
        >
          <Image src='/assets/google.png' alt='' width={16} height={16} />
          <span>{t('Sign in with Google')}</span>
        </Button>
        <div
          id='redirect-box'
          className={`flex gap-x-1 mt-8 text-base font-normal leading-6 ${languageFont}`}
        >
          <p className='text-lowGray '>{t("Don't have an account")}</p>
          <Button id='' className='underline text-link' type='button'>
            {t('Sign up')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RegistrationForm;
