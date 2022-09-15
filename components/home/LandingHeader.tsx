import { Button, LanguageSelect } from 'components';
import { useTranslation } from 'next-i18next';

const LandingHeader = () => {
  const { t } = useTranslation('landing');
  return (
    <header className='w-full py-8 px-9 flex justify-between items-center'>
      <span className='text-cream font-neue font-medium text-base uppercase leading-6'>
        {t('Movie quotes')}
      </span>
      <div className='flex gap-x-3'>
        <LanguageSelect className='' />
        <Button
          id='login-btn'
          className='w-24 h-10 border border-white rounded-md text-base leading-6 text-white font-bold'
        >
          {t('Log in')}
        </Button>
      </div>
    </header>
  );
};

export default LandingHeader;
