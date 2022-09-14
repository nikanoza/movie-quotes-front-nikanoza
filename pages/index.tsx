import type { NextPage } from 'next';
import { LandingHeader } from 'components';

const Home: NextPage = () => {
  return (
    <div className='w-full h-screen bg-darkBlue flex flex-col'>
      <LandingHeader />
      <div className='w-full my-auto px-20'>
        <h1 className='text-cream font-montserrat text-2xl leading-9 text-center'>
          Find any quote in millions of movie lines
        </h1>
      </div>
    </div>
  );
};

export default Home;
