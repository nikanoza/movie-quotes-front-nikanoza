import { Button, Input } from 'components/shared';
import { PropsType } from './types';
import useChangeName from './useChangeName';

const ChangeName: React.FC<PropsType> = (props) => {
  const { formik, t, router } = useChangeName();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <form
      className='bg-boxBg px-8 pt-8 pb-14 mt-6 flex flex-col rounded-xl'
      onSubmit={(e) => {
        formik.validateOnChange = true;
        formik.handleSubmit(e);
      }}
    >
      <label
        htmlFor='change-name'
        className={`text-base lg:text-xl font-normal leading-6 ${languageFont} text-white mt-8 mr-auto`}
      >
        {t('Enter new username')}
      </label>
      <Input
        id='change-name'
        className='w-full'
        type='text'
        inputName='name'
        errors={formik.errors}
        touched={formik.touched['name']}
        dirty={formik.dirty}
        value={formik.values['name']}
        handleChange={formik.handleChange}
      />
      <div
        className={`w-full h-4 font-normal text-sm text-blood leading-5 ${languageFont}`}
      >
        {t((formik.touched['name'] && formik.errors['name']) || '')}
      </div>
      <div
        id='change-name-controls'
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
    </form>
  );
};

export default ChangeName;
