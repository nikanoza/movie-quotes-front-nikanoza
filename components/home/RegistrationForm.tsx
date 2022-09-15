import { Modal, Input } from 'components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRegistrationForm } from './useRegistrationForm';

const RegistrationForm = () => {
  const { t } = useTranslation('landing');
  const { formik } = useRegistrationForm();
  const router = useRouter();
  const locale = router.locale === 'en' ? 'en' : 'geo';
  return (
    <Modal>
      <form className='w-full pt-20 px-11'>
        <h2
          className={`font-medium leading-7 text-2xl text-white ${
            locale === 'en' ? 'font-neue' : 'font-georgian'
          }`}
        >
          {t('Create an account')}
        </h2>
      </form>
    </Modal>
  );
};

export default RegistrationForm;
