import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useLandingHeader = () => {
  const router = useRouter();
  const { t } = useTranslation('landing');

  return { router, t };
};

export default useLandingHeader;
