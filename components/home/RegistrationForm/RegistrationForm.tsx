import { Modal, Input, Button } from 'components';
import useRegistrationForm from './useRegistrationForm';
import Image from 'next/image';
import { PropsType } from './types';

const RegistrationForm: React.FC<PropsType> = (props) => {
  const { formik, t, router } = useRegistrationForm();
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
          {t('Create an account')}
        </h2>
        <h3
          className={`font-normal leading-6 text-base lg:text-xl text-lowGray mt-3 ${languageFont}`}
        >
          {t('Start your journey!')}
        </h3>
        <label
          htmlFor='registration-name'
          className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-8 mr-auto`}
        >
          {t('Name')} <span className='text-error'>*</span>
        </label>
        <Input
          id='registration-name'
          className='w-full'
          type='text'
          inputName='username'
          errors={formik.errors}
          touched={formik.touched['username']}
          dirty={formik.dirty}
          placeholder={t('Enter your name')}
          value={formik.values['username']}
          handleChange={formik.handleChange}
        />
        <div
          className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
        >
          {t((formik.touched['username'] && formik.errors['username']) || '')}
        </div>
        <label
          htmlFor='registration-mail'
          className={`text-base lg:text-xl font-normal mt-1 leading-6 ${languageFont} text-white mr-auto`}
        >
          {t('Email')} <span className='text-error'>*</span>
        </label>
        <Input
          id='registration-mail'
          className='w-full'
          type='email'
          inputName='email'
          errors={formik.errors}
          value={formik.values['email']}
          touched={formik.touched['email']}
          dirty={formik.dirty}
          placeholder={t('Enter your email')}
          handleChange={formik.handleChange}
        />
        <div
          className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
        >
          {t((formik.touched['email'] && formik.errors['email']) || '')}
        </div>
        <label
          htmlFor='registration-password'
          className={`text-base lg:text-xl font-normal mt-1 leading-6 ${languageFont} text-white mr-auto`}
        >
          {t('Password')} <span className='text-error'>*</span>
        </label>
        <Input
          id='registration-password'
          className='w-full'
          type='password'
          inputName='password'
          errors={formik.errors}
          value={formik.values['password']}
          touched={formik.touched['password']}
          dirty={formik.dirty}
          placeholder={t('Password')}
          handleChange={formik.handleChange}
        />
        <div
          className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
        >
          {t((formik.touched['password'] && formik.errors['password']) || '')}
        </div>
        <label
          htmlFor='registration-repeat-password'
          className={`text-base lg:text-xl font-normal mt-1 leading-6 ${languageFont} text-white mr-auto`}
        >
          {t('Confirm password')} <span className='text-error'>*</span>
        </label>
        <Input
          id='registration-repeat-password'
          className='w-full'
          type='password'
          inputName='repeatPassword'
          errors={formik.errors}
          value={formik.values['repeatPassword']}
          touched={formik.touched['repeatPassword']}
          dirty={formik.dirty}
          placeholder={t('Password')}
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
        <Button
          id='reg-btn'
          className={`w-full h-9 rounded bg-blood hover:bg-bloodHover mt-2 text-white text-base font-normal leading-6 ${languageFont}`}
          type='submit'
        >
          {t('Get started')}
        </Button>
        <Button
          id='google-btn'
          className={`w-full flex gap-x-2 justify-center items-center h-9 rounded mt-4 text-white text-base font-normal leading-6 border border-fGray ${languageFont}`}
          type='button'
        >
          <Image src='/assets/google.png' alt='' width={16} height={16} />
          <span>{t('Sign up with Google')}</span>
        </Button>
        <div
          id='redirect-box'
          className={`flex gap-x-1 mt-8 text-base font-normal leading-6 ${languageFont}`}
        >
          <p className='text-lowGray '>{t('Already have an account?')}</p>
          <Button id='' className='underline text-link' type='button'>
            {t('Log in')}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default RegistrationForm;
