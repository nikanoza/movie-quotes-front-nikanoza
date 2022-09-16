import { Button, LanguageSelect } from 'components';
import useLandingHeader from './useLandingHeader';

const LandingHeader = () => {
  const { router, t } = useLandingHeader();
  const locale = router.locale;
  return (
    <header
      className={`w-full py-8 px-9 flex justify-between items-center ${
        locale === 'en' ? 'font-neue' : 'font-georgian'
      }`}
    >
      <span className='text-cream font-medium text-base uppercase leading-6'>
        {t('Movie quotes')}
      </span>
      <div className='flex gap-x-3'>
        <LanguageSelect className='' />
        <Button
          type='button'
          id='sign-btn'
          className='px-6 py-2 rounded-md text-base leading-6 text-white font-bold bg-blood hover:bg-bloodHover hidden md:block'
        >
          {t('Sign Up')}
        </Button>
        <Button
          type='button'
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
