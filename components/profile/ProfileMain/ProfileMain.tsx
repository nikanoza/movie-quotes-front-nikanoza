import { Button } from 'components';
import Image from 'next/image';
import { PropsType } from './types';
import useProfileMain from './useProfileMain';

const ProfileMain: React.FC<PropsType> = (props) => {
  const { router, t } = useProfileMain();

  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';

  return (
    <div
      id='profile-box'
      className='bg-boxBg px-8 pt-10 pb-24 flex flex-col items-center rounded-xl'
    >
      <div id='profile-img'>
        <Image src={'/assets/avatar.png'} alt='' width={188} height={188} />
      </div>
      <Button
        id='uploat-avatar-btn'
        type='button'
        className={`font-normal text-white text-base leading-7 ${languageFont}`}
      >
        {t('Upload new photo')}
      </Button>
      <div
        id='name-box'
        className='mt-14 w-full flex justify-between items-end'
      >
        <div>
          <span
            className={`font-normal text-white text-sm leading-7 ${languageFont}`}
          >
            {t('Username')}
          </span>
          <h2
            className={`font-normal text-white text-base leading-7 ${languageFont}`}
          >
            Nino Tabagari
          </h2>
        </div>
        <Button
          id='username-edit-btn'
          type='button'
          className={`font-normal text-white text-base leading-7 ${languageFont}`}
        >
          {t('Edit')}
        </Button>
      </div>
      <hr className='bg-hr h-0.25 w-full opacity-50 mt-4' />
      <div
        id='password-box'
        className='mt-8 w-full flex justify-between items-end'
      >
        <div>
          <span
            className={`font-normal text-white text-sm leading-7 ${languageFont}`}
          >
            {t('Password')}
          </span>
          <h2
            className={`font-normal text-white text-base leading-7 ${languageFont}`}
          >
            ********
          </h2>
        </div>
        <Button
          id='password-edit-btn'
          type='button'
          className={`font-normal text-white text-base leading-7 ${languageFont}`}
        >
          {t('Edit')}
        </Button>
      </div>
      <hr className='bg-hr h-0.25 w-full opacity-50 mt-4' />
      <div id='email-box' className='mt-8 w-full flex justify-between '>
        <span
          className={`font-normal text-white text-sm leading-7 ${languageFont}`}
        >
          {t('Email')}
        </span>
        <Button
          type='button'
          id='email-box-btn'
          className=''
          onClick={() => props.changeInfoBoxHandler('emails')}
        >
          <Image
            src={'/assets/right.png'}
            alt=''
            className=''
            width={6}
            height={12}
          />
        </Button>
      </div>
    </div>
  );
};

export default ProfileMain;
