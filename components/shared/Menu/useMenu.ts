import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const useMenu = (ref: HTMLDivElement | null) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(ref);
  const { t } = useTranslation('common');

  return { router, t, menuRef };
};

export default useMenu;
