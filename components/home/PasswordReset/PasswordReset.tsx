import { Modal, Input, Button } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { PropsType } from './types';
import usePasswordReset from './usePasswordRest';

const PasswordReset: React.FC<PropsType> = (props) => {
  const { t, router, formik } = usePasswordReset();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <Modal close={() => props.modalChangeHandler('')}>
      <form
        className='w-full h-full md:w-150 md:h-176 md:mx-auto md:my-auto pt-28 pb-4 px-11 bg-darkBlue flex flex-col items-center'
        onSubmit={(e) => {
          formik.validateOnChange = true;
          formik.handleSubmit(e);
        }}
      >
        <h2
          className={`font-medium leading-7 text-2xl lg:text-3xl text-white ${languageFont}`}
        >
          {t('Create new password')}
        </h2>
        <h3
          className={`font-normal leading-6 text-center text-xs lg:text-xl text-lowGray mt-3 ${languageFont}`}
        >
          {t(
            'Your new password must be different from previous used passwords'
          )}
        </h3>
        <label
          htmlFor='reset-password'
          className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-6 mr-auto`}
        >
          {t('Password')} <span className='text-error'>*</span>
        </label>
        <Input
          id='reset-password'
          className='w-full'
          type='password'
          inputName='password'
          errors={formik.errors}
          touched={formik.touched['password']}
          dirty={formik.dirty}
          placeholder={t('At least 8 & max.15 lower case characters')}
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
          {t('Confirm password')} <span className='text-error'>*</span>
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
        <Button
          id='reg-btn'
          className={`w-full h-9 rounded bg-blood hover:bg-bloodHover mt-2 text-white text-base font-normal leading-6 ${languageFont}`}
          type='submit'
        >
          {t('Reset password')}
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

export default PasswordReset;
