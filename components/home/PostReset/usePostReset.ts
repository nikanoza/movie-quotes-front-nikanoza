import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const usePostReset = () => {
  const { t } = useTranslation('landing');
  const router = useRouter();

  return { t, router };
};

export default usePostReset;
