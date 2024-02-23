import React from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from './data';
import './BaseHeaderLinks.scss';

interface HeaderLinksI {
  link: string;
  name: string;
}

const BaseHeaderLinks: React.FC = () => {
  return (
    <div className='base-header-links'>
      {headerLinks.map(({ link, name }: HeaderLinksI) => (
        <NavLink className='base-header-links__link' key={link} to={link}>
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default BaseHeaderLinks;
