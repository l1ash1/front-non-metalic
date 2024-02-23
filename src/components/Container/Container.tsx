import { FC, ReactNode } from 'react';

import './Container.scss';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className='common-container'>
      <div className='common-wrapper'>{children}</div>
    </div>
  );
};

export default Container;
