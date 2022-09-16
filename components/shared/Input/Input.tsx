import Image from 'next/image';
import { ChangeEvent } from 'react';
import { FormikInput } from 'types';
import useInput from './useInput';

const Input: React.FC<FormikInput> = (props) => {
  const { showStatus, setShowStatus, inputRef } = useInput();

  const statusChangeHandler = () => {
    setShowStatus(!showStatus);
    if (inputRef.current) {
      inputRef.current.type = !showStatus ? 'text' : 'password';
    }
  };
  return (
    <div className='mr-auto mt-2 w-full flex relative items-center'>
      <input
        type={props.type}
        name={props.inputName}
        id={props.id}
        ref={inputRef}
        placeholder={props.placeholder}
        defaultValue={props.value}
        className={
          `pl-3 pr-14 py-2 text-base leading-6 rounded border border-fGray disabled:bg-fWhite focus:shadow-sGray outline-none ${
            props.touched && props.errors[props.inputName]
              ? 'border-blood'
              : props.touched
              ? 'border-success'
              : ' bg-fGray'
          } ` + props.className
        }
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props.handleChange(event)
        }
      />
      {props.dirty && props.value !== '' && (
        <div className='absolute right-2 flex justify-center items-center'>
          <Image
            src={
              props.errors[props.inputName] && props.touched
                ? '/assets/error.png'
                : props.touched
                ? '/assets/correct.png'
                : '/assets/filled.png'
            }
            alt=''
            className='w-4 h-4'
            width={16}
            height={16}
          />
        </div>
      )}
      {props.value === '' && props.errors[props.inputName] && (
        <div className='absolute right-2 flex justify-center items-center'>
          <Image
            src='/assets/error.png'
            alt=''
            className='w-4 h-4'
            width={16}
            height={16}
          />
        </div>
      )}
      {props.type === 'password' && (
        <div className='absolute right-7 flex justify-center items-center'>
          <Image
            src={showStatus ? '/assets/eyeHidden.png' : '/assets/eyeShow.png'}
            alt=''
            className='text-base cursor-pointer'
            width={16}
            height={16}
            onClick={statusChangeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
