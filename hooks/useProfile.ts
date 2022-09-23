import { useRef, useState } from 'react';

const useProfile = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const [infoBox, setInfoBox] = useState<string>('main');
  const closeMenu = () => {
    setMenuStatus(false);
  };
  const openMenu = () => {
    setMenuStatus(true);
  };

  return { menuRef, closeMenu, openMenu, menuStatus, infoBox, setInfoBox };
};

export default useProfile;
