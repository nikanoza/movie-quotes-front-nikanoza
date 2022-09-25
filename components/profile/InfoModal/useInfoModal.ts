import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useInfoModal = () => {
  const router = useRouter();
  const { t } = useTranslation('profile');

  return { router, t };
};

export default useInfoModal;
