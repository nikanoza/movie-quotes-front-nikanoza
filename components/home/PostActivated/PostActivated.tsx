import { Button, Modal } from 'components/shared';
import Image from 'next/image';
import { PropsType } from './types';
import usePostActivated from './usePostActivated';

const PostActivated: React.FC<PropsType> = (props) => {
  const { t, router } = usePostActivated();

  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <Modal close={() => props.modalChangeHandler('')}>
      <div className='w-full h-full sm:w-134 sm:h-104 sm:m-auto bg-darkBlue flex justify-center items-center'>
        <div className='w-5/6 h-104 sm:w-full sm:px-20 bg-popup m-auto sm:m-0 backdrop-blur-xl flex flex-col items-center pt-20'>
          <Image
            src={'/assets/success.png'}
            alt=''
            className=''
            width={57}
            height={57}
          />
          <h2
            className={`mt-4 font-medium leading-7 text-2xl ${languageFont} text-white`}
          >
            {t('Thank you!')}
          </h2>
          <p
            className={`mt-6 font-normal leading-6 text-sm ${languageFont} text-white text-center`}
          >
            {t('Your account has been activated.')}
          </p>
          <a href={'https://mail.google.com/'}>
            <Button
              id='email-btn'
              type='button'
              className={`px-10 sm:px-20 h-9 rounded bg-blood hover:bg-bloodHover mt-6 text-white text-base font-normal leading-6 ${languageFont}`}
            >
              {t('Return to Home page')}
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default PostActivated;
