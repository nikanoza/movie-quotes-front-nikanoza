import type { NextPage } from 'next';
import {
  Button,
  ForgotPassword,
  LandingHeader,
  LandingMovie,
  PostActivated,
  PostForgot,
  PostRegistration,
  RegistrationForm,
  PasswordReset,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useHomePage } from 'hooks';

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
  const { router, t, modal, openModal } = useHomePage();
  const locale = router.locale;
  return (
    <div className='w-full min-h-screen bg-darkBlue flex flex-col'>
      <div className='w-full h-screen flex flex-col'>
        <LandingHeader openModal={openModal} />
        <div className='w-full my-auto px-16 flex flex-col items-center'>
          <h1 className='text-cream font-montserrat text-2xl md:text-3xl xl:text-4xl 3xl:text-6xl 3xl:w-2/5 leading-9 text-center font-bold'>
            {t('Find any quote in millions of movie lines')}
          </h1>
          <Button
            id='start-btn'
            className={`px-4 py-2 bg-blood hover:bg-bloodHover mt-8 text-white text-sm md:text-xl leading-6 rounded-md ${
              locale === 'en' ? 'font-neue' : 'font-georgian'
            }`}
            type='button'
            onClick={() => openModal('register')}
          >
            {t('Get started')}
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
      {modal === 'register' && (
        <RegistrationForm modalChangeHandler={openModal} />
      )}
      {modal === 'post-register' && (
        <PostRegistration modalChangeHandler={openModal} />
      )}
      {modal === 'post-activated' && (
        <PostActivated modalChangeHandler={openModal} />
      )}
      {modal === 'forgot-password' && (
        <ForgotPassword modalChangeHandler={openModal} />
      )}
      {modal === 'post-forgot' && <PostForgot modalChangeHandler={openModal} />}
      {modal === 'forgot-reset' && (
        <PasswordReset modalChangeHandler={openModal} />
      )}
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'landing'])),
    },
  };
}

export default Home;
