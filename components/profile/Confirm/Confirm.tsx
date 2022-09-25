import { Button } from 'components';
import { PropsType } from './types';
import useConfirm from './useConfirm';

const Confirm: React.FC<PropsType> = (props) => {
  const { t, router } = useConfirm();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <div
      id='confirm'
      className={`bg-popup w-4/5 h-52 flex flex-col items-center mx-auto mt-14 rounded-xl text-sm text-white font-normal leading-6 ${languageFont}`}
    >
      <span className='mt-16'>{t('Are you sure to make changes ?')}</span>
      <hr className='bg-hr h-0.25 w-full opacity-50 mt-11' />
      <div
        id='confirm-controls'
        className='mt-5 w-full flex justify-between items-center px-6'
      >
        <Button
          id='close'
          type='button'
          className=''
          onClick={() => props.changeInfoBoxHandler('emails')}
        >
          {t('Cancel')}
        </Button>
        <Button
          id='reg-btn'
          className={`px-2 h-9 rounded bg-blood hover:bg-bloodHover text-white text-base font-normal leading-6 ${languageFont}`}
          type='submit'
        >
          {t('Confirm')}
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
