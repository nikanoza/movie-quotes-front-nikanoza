import { ReactNode } from 'react';

export type Button = {
  id: string;
  className: string;
  onClick?: () => void;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
};
