import Image from 'next/image';
import { FormikInput } from 'types';

const Input: React.FC<FormikInput> = (props) => (
  <div className='px-3 py-2'>
    <input
      type={props.type}
      onChange={props.onChange}
      name={props.inputName}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      className={
        `text-base leading-6 rounded-md border border-fGray disabled:bg-fWhite focus:shadow-sGray ${
          props.touched && props.errors[props.inputName]
            ? 'border-blood'
            : props.touched
            ? 'border-success'
            : ' bg-fGray'
        }` + props.className
      }
    />
    {props.dirty && (
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
      />
    )}
  </div>
);

export default Input;
