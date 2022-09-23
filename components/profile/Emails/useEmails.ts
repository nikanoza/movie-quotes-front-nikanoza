import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const useEmails = () => {
  const router = useRouter();
  const { t } = useTranslation('profile');

  return { router, t };
};

export default useEmails;
