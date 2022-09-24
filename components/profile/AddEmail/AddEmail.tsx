import { Button, Input } from 'components/shared';
import { PropsType } from './types';
import useAddEmail from './useAddEmail';

const AddEmail: React.FC<PropsType> = (props) => {
  const { formik, t, router } = useAddEmail();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <div className='bg-boxBg px-8 pt-8 pb-14 mt-6 flex flex-col rounded-xl'>
      <label
        htmlFor='add-email'
        className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-8 mr-auto`}
      >
        {t('Add new email')}
      </label>
      <Input
        id='add-email'
        className='w-full'
        type='text'
        inputName='email'
        errors={formik.errors}
        touched={formik.touched['email']}
        dirty={formik.dirty}
        value={formik.values['email']}
        handleChange={formik.handleChange}
      />
      <div
        className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
      >
        {t((formik.touched['email'] && formik.errors['email']) || '')}
      </div>
      <div
        id='add-email-controls'
        className={`mt-48 w-full flex justify-between items-center font-normal text-xs leading-5 text-white ${languageFont}`}
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
    </div>
  );
};

export default AddEmail;
