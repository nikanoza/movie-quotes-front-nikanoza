import { ReactNode, useRef } from 'react';

const Modal: React.FC<{ children: ReactNode; close: () => void }> = (props) => {
  const backdrop = useRef<HTMLDivElement>(null);

  const closeModalHandler = (event: React.MouseEvent) => {
    if (event.target === backdrop.current) {
      props.close();
    }
  };

  return (
    <div
      className='w-full h-full fixed flex bg-backdrop'
      ref={backdrop}
      onClick={closeModalHandler}
    >
      {props.children}
    </div>
  );
};

export default Modal;
