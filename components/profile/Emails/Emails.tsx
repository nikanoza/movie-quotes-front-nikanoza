import Image from 'next/image';
import useEmails from './useEmails';

const Emails = () => {
  const { router, t } = useEmails();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <div className='bg-boxBg px-8 pt-8 pb-8 flex flex-col rounded-xl'>
      <div id='primary-box'>
        <span
          className={` text-xs uppercase text-white leading-5 ${languageFont}`}
        >
          {t('primary email')}
        </span>
        <div
          id='email-box'
          className={`flex border border-hulk bg-lightHulk py-2 pl-4 text-base text-white mt-6 justify-between`}
        >
          <span>ninotabagari@gmail.com</span>
          <Image
            src={'/assets/correct.png'}
            alt=''
            className='w-4 h-4'
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Emails;
