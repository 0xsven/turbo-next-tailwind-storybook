import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <button className="bg-blue-800 text-blue-50 px-3 py-2">{children}</button>
  );
};
