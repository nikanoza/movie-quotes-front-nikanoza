import { Button, Menu } from 'components';
import { Emails, ProfileMain } from 'components/profile';
import { useProfile } from 'hooks';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  const { menuRef, closeMenu, openMenu, menuStatus, infoBox, setInfoBox } =
    useProfile();

  const closeMenuHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target !== menuRef.current && menuStatus) {
      closeMenu();
    }
  };
  return (
    <div
      className='w-full min-h-screen bg-darkBlue flex flex-col'
      onClick={closeMenuHandler}
    >
      <Menu menuRef={menuRef} openMenu={openMenu} menuStatus={menuStatus} />|
      <Button id='back-btn' type='button' className='w-6 ml-10'>
        <Image
          src='/assets/arrowLeft.png'
          alt=''
          width={'14'}
          height={'16'}
          className=''
        />
      </Button>
      {infoBox === 'main' && <ProfileMain changeInfoBoxHandler={setInfoBox} />}
      {infoBox === 'emails' && <Emails />}
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'profile'])),
    },
  };
}

export default Profile;
