import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useHomePage = () => {
  const [modal, setModal] = useState<string>('login');

  const openModal = (modalType: string) => {
    setModal(modalType);
  };

  const router = useRouter();
  const { t } = useTranslation('landing');
  return { router, t, openModal, modal };
};

export default useHomePage;
