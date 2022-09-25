import { Button, Menu } from 'components';
import { AddEmail, Confirm, Emails, ProfileMain } from 'components';
import InfoModal from 'components/profile/InfoModal/InfoModal';
import { useProfile } from 'hooks';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  const {
    menuRef,
    closeMenu,
    openMenu,
    menuStatus,
    infoBox,
    setInfoBox,
    infoModal,
    setInfoModal,
  } = useProfile();

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
      {infoBox !== 'confirm' && (
        <Button id='back-btn' type='button' className='w-6 ml-10'>
          <Image
            src='/assets/arrowLeft.png'
            alt=''
            width={'14'}
            height={'16'}
            className=''
          />
        </Button>
      )}
      {infoBox === 'main' && <ProfileMain changeInfoBoxHandler={setInfoBox} />}
      {infoBox === 'emails' && <Emails changeInfoBoxHandler={setInfoBox} />}
      {infoBox === 'add-email' && (
        <AddEmail changeInfoBoxHandler={setInfoBox} />
      )}
      {infoBox === 'confirm' && <Confirm changeInfoBoxHandler={setInfoBox} />}
      {infoModal.status && (
        <InfoModal info={infoModal} setInfoModal={setInfoModal} />
      )}
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
