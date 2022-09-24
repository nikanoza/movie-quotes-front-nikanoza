import { Button } from 'components';
import Image from 'next/image';
import { PropsType } from './types';
import useEmails from './useEmails';

const Emails: React.FC<PropsType> = (props) => {
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
          id='primary-email-box'
          className={`flex border border-hulk bg-lightHulk py-2 px-4 text-base text-white mt-6 justify-between items-center`}
        >
          <span>ninotabagari@gmail.com</span>
          <div className='w-4 h-4'>
            <Image
              src={'/assets/check.png'}
              alt=''
              className='w-4 h-4'
              width={16}
              height={16}
            />
          </div>
        </div>
        <hr className='bg-hr h-0.25 w-full opacity-50 mt-4' />
        <div id='emails-change' className='w-full h-80 flex flex-col'>
          <div id='email-change-box' className='pt-14'>
            <span className='text-base font-neue text-white'>
              ninotabagari12345@gmail.com
            </span>
            <div
              id='email-controls'
              className='flex justify-between items-center mt-6'
            >
              <Button
                id='make-primary-btn'
                className={`px-3 py-2 border border-white rounded text-white ${languageFont}`}
                type='button'
              >
                {t('Make this primary')}
              </Button>
              <Button
                id='delete-email-btn'
                type='button'
                className='text-fGray'
              >
                {t('Remove')}
              </Button>
            </div>
            <hr className='bg-hr h-0.25 w-full opacity-50 mt-6' />
          </div>
        </div>
        <div
          id='add-email-box'
          className={`mt-14 text-base text-white font-normal ${languageFont}`}
        >
          {t('Add new email')}
        </div>
        <Button
          id='add-email-btn'
          className={`w-full py-2 mt-6 flex gap-x-2 justify-center items-center rounded border border-lightBorder text-base text-white font-normal leading-6 ${languageFont}`}
          type='button'
          onClick={() => props.changeInfoBoxHandler('add-email')}
        >
          <div
            id='plus-icon'
            className={`w-4 h-4 flex justify-center items-center border rounded-sm border-lightBorder`}
          >
            +
          </div>
          <span>{t('Add')}</span>
        </Button>
      </div>
    </div>
  );
};

export default Emails;
