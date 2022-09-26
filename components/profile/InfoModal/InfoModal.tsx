import { Button, Modal } from 'components';
import Image from 'next/image';
import { PropsType } from './types';
import useInfoModal from './useInfoModal';

const InfoModal: React.FC<PropsType> = (props) => {
  const { t, router } = useInfoModal();
  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <Modal close={() => props.setInfoModal({ ...props.info, status: false })}>
      <div
        className={`w-4/5 h-32 p-4 bg-alert rounded mx-auto mt-32 font-normal text-sm ${languageFont}`}
      >
        <div id='alert-header' className='w-full flex justify-between'>
          <div id='header-left' className='flex gap-x-2'>
            <div className='w-4 h-4'>
              <Image src={'/assets/check.png'} alt='' width={16} height={16} />
            </div>
            <span className='text-alertText'>{t(props.info.header)}</span>
          </div>
          <Button id='infoModal-close' type='button' className=''>
            <Image src={'/assets/close.png'} alt='' width={16} height={16} />
          </Button>
        </div>
        {props.info.description && (
          <span id='alert-description' className='mt-5'>
            {t(props.info.description)}
          </span>
        )}
      </div>
    </Modal>
  );
};

export default InfoModal;
