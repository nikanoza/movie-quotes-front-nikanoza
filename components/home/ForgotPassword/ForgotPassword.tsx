import { Modal, Input, Button } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { PropsType } from './types';
import useForgotPassword from './useForgotPassword';

const ForgotPassword: React.FC<PropsType> = (props) => {
  const { t, router, formik } = useForgotPassword();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <Modal close={() => props.modalChangeHandler('')}>
      <form
        className='w-full h-full md:w-150 md:h-176 md:mx-auto md:my-auto pt-28 lg:pt-5 pb-4 px-11 bg-darkBlue flex flex-col items-center'
        onSubmit={(e) => {
          formik.validateOnChange = true;
          formik.handleSubmit(e);
        }}
      >
        <h2
          className={`font-medium leading-7 text-2xl lg:text-3xl text-white ${languageFont}`}
        >
          {t('Forgot password?')}
        </h2>
        <h3
          className={`font-normal leading-6 text-xs text-center lg:text-xl text-lowGray mt-3 ${languageFont}`}
        >
          {t(
            'Enter the email and we’ll send an email with instructions to reset your password'
          )}
        </h3>
        <label
          htmlFor='forgot-email'
          className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-8 mr-auto`}
        >
          {t('Email')}
        </label>
        <Input
          id='forgot-email'
          className='w-full'
          type='text'
          inputName='email'
          errors={formik.errors}
          touched={formik.touched['email']}
          dirty={formik.dirty}
          placeholder={t('Enter your email')}
          value={formik.values['email']}
          handleChange={formik.handleChange}
        />
        <div
          className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
        >
          {t((formik.touched['email'] && formik.errors['email']) || '')}
        </div>
        <Button
          id='reg-btn'
          className={`w-full h-9 rounded bg-blood hover:bg-bloodHover mt-2 text-white text-base font-normal leading-6 ${languageFont}`}
          type='submit'
        >
          {t('Send instructions')}
        </Button>
        <div className='mt-8 flex gap-x-3'>
          <Image
            src='/assets/arrowLeft.png'
            alt=''
            width={'24'}
            height={'10'}
          />
          <Link href={'/'}>
            <span
              className={`font-normal text-base leading-6 text-lowGray ${languageFont}`}
            >
              {t('Back to log in')}
            </span>
          </Link>
        </div>
      </form>
    </Modal>
  );
};

export default ForgotPassword;
