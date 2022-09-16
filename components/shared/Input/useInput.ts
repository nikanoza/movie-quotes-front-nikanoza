import { useRef, useState } from 'react';

const useInput = () => {
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return { showStatus, setShowStatus, inputRef };
};

export default useInput;
