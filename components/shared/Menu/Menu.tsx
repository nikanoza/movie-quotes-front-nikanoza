import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button';
import LanguageSelect from '../LanguageSelect';
import { PropsType } from './types';
import useMenu from './useMenu';

const Menu: React.FC<PropsType> = (props) => {
  const { router, t, menuRef } = useMenu(props.menuRef);

  const languageFont = router.locale === 'en' ? 'font-neue' : 'font-georgian';
  return (
    <div id='header' className='w-full h-20 bg-boxBg flex items-center px-9 '>
      <div className='space-y-1' onClick={props.openMenu}>
        <div className='w-4 h-0.5 bg-white'></div>
        <div className='w-4 h-0.5 bg-white'></div>
        <div className='w-4 h-0.5 bg-white'></div>
      </div>
      <div id='header-right' className='flex gap-x-5 ml-auto'>
        <Button id='search-btn' type='button' className='hidden'>
          <Image src={'/assets/search.png'} width={21} height={24} alt='' />
        </Button>
        <Button id='notifications-btn' className='' type='button'>
          <Image src={'/assets/bell.png'} width={21} height={24} alt='' />
        </Button>
        <LanguageSelect className='' />
        <Button
          id='logout-btn'
          className={`px-3 py-2 border border-white rounded text-white ${languageFont}`}
          type='button'
        >
          {t('Log out')}
        </Button>
        <div
          id='menu'
          ref={menuRef}
          className={`w-96 pt-10 pl-11 pb-64 absolute z-20 left-0 top-0 bg-menuBg ${
            props.menuStatus ? '' : 'hidden'
          }`}
        >
          <div id='menu-user' className='flex gap-x-5 items-center'>
            <div className='w-10 h-10 rounded-full'>
              <Image
                src={'/assets/avatarMini.png'}
                width={40}
                height={40}
                alt=''
                className='rounded-full'
              />
            </div>
            <div>
              <h2 className='font-neue leading-7 text-base font-normal text-white'>
                Nino Tabagari
              </h2>
              <Link href={''}>
                <span
                  className={`font-normal leading-5 text-xs ${languageFont} text-white`}
                >
                  {t('Edit your profile')}
                </span>
              </Link>
            </div>
          </div>
          <div id='news-menu' className='mt-10 flex gap-x-7 h-5'>
            <Link href={'/'} className='cursor-pointer'>
              <div>
                <Image src={'/assets/home.png'} width={22} height={20} alt='' />
              </div>
            </Link>
            <Link href={''} className='cursor-pointer'>
              <span
                className={`leading-7 text-base font-normal text-white ${languageFont}`}
              >
                {t('News feed')}
              </span>
            </Link>
          </div>
          <div id='movies-menu' className='mt-10 flex gap-x-7 h-5'>
            <Link href={''} className='cursor-pointer'>
              <div>
                <Image
                  src={'/assets/movie.png'}
                  width={22}
                  height={20}
                  alt=''
                />
              </div>
            </Link>
            <Link href={''} className='cursor-pointer'>
              <span
                className={`leading-7 text-base font-normal text-white ${languageFont}`}
              >
                {t('List of movies')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
