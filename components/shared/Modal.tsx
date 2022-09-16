import { ReactNode } from 'react';

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div className='w-full h-full fixed flex bg-backdrop'>{props.children}</div>
  );
};

export default Modal;
