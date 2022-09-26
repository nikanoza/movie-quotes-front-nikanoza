import { useRef, useState } from 'react';
import { InfoModal } from 'types';

const infoModalState: InfoModal = {
  status: false,
  header: '',
  description: '',
};

const useProfile = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const [infoModal, setInfoModal] = useState<InfoModal>(infoModalState);
  const [infoBox, setInfoBox] = useState<string>('password');
  const closeMenu = () => {
    setMenuStatus(false);
  };
  const openMenu = () => {
    setMenuStatus(true);
  };

  return {
    menuRef,
    closeMenu,
    openMenu,
    menuStatus,
    infoBox,
    setInfoBox,
    infoModal,
    setInfoModal,
  };
};

export default useProfile;
