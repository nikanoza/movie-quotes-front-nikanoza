import { Button } from 'components';

const LandingHeader = () => {
  return (
    <div className='w-full py-8 px-9 flex justify-between items-center fixed'>
      <span className='text-cream font-neue font-medium text-base uppercase leading-6'>
        Movie quotes
      </span>
      <Button
        id='login-btn'
        className='w-24 h-10 border border-white rounded-md text-base font-normal leading-6 text-white'
      >
        Log in
      </Button>
    </div>
  );
};

export default LandingHeader;
