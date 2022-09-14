import { Button } from 'types';

const Button: React.FC<Button> = (props) => {
  return (
    <button id={props.id} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
