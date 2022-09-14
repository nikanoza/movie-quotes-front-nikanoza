import type { NextPage } from 'next';
import { Button, LandingHeader, LandingMovie } from 'components';
import { i18n, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

const movies = [
  {
    poster: '/assets/fightClub.jpg',
    quote:
      'It’s Only After We’ve Lost Everything That We’re Free To Do Anything.',
    title: 'Fight Club',
    year: 1999,
    id: 1,
  },
  {
    poster: '/assets/joker.jpg',
    quote: 'After every dark night comes a glorious morning of a new day',
    title: 'The dark knight',
    year: 2008,
    id: 2,
  },
  {
    poster: '/assets/notebook.jpg',
    quote: 'You are and always have been, my dream.',
    title: 'The notebook',
    year: 2004,
    id: 3,
  },
];

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const change = router.locale === 'en' ? 'geo' : 'en';
  console.log(i18n?.language);
  return (
    <div className='w-full min-h-screen bg-darkBlue flex flex-col'>
      <div className='w-full h-screen flex flex-col'>
        <LandingHeader />
        <Link href='/' locale={change}>
          <button className=' text-red-500'>
            {t('change-locale')} {change}
          </button>
        </Link>
        <div className='w-full my-auto px-16 flex flex-col items-center'>
          <h1 className='text-cream font-montserrat text-2xl leading-9 text-center font-bold'>
            {t('Find any quote in millions of movie lines')}
          </h1>
          <Button
            id='start-btn'
            className='w-28 h-9 bg-blood mt-8 text-white text-sm leading-6 font-neue rounded-md'
          >
            Get started
          </Button>
        </div>
      </div>
      {movies.map((movie, index) => (
        <LandingMovie key={index} movie={movie} />
      ))}
      <footer className='w-full py-3 pl-9'>
        <p className='font-neue font-medium text-cream uppercase text-mbFooter'>
          © 2022 movie quotes. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'common'])),
    },
  };
}

export default Home;
