import { Button, LanguageSelect } from 'components';

const LandingHeader = () => {
  return (
    <header className='w-full py-8 px-9 flex justify-between items-center'>
      <span className='text-cream font-neue font-medium text-base uppercase leading-6'>
        Movie quotes
      </span>
      <div className='flex gap-x-3'>
        <LanguageSelect />
        <Button
          id='login-btn'
          className='w-24 h-10 border border-white rounded-md text-base leading-6 text-white font-bold'
        >
          Log in
        </Button>
      </div>
    </header>
  );
};

export default LandingHeader;
