import { useRouter } from 'next/router';
import React from 'react';

const LanguageSelect: React.FC<{ className: string }> = (props) => {
  const router = useRouter();
  const languageChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    router.push(router.asPath, router.asPath, { locale: event.target.value });
  };
  return (
    <select
      name='language'
      id='language-select'
      className={'bg-transparent text-white outline-none' + props.className}
      defaultValue={router.locale}
      onChange={languageChangeHandler}
    >
      <option value='en' className='text-dBlue'>
        ENG
      </option>
      <option value='geo' className='text-dBlue'>
        GEO
      </option>
    </select>
  );
};

export default LanguageSelect;
