import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useHomePage = () => {
  const router = useRouter();
  const { t } = useTranslation('landing');
  return { router, t };
};

export default useHomePage;
