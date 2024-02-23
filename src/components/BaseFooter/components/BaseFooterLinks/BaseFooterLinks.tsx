import React from 'react';
import { NavLink } from 'react-router-dom';

import { footerLinks } from './data';
import './BaseFooterLinks.scss';

interface HeaderLinksI {
  link: string;
  name: string;
}

const BaseFooterLinks: React.FC = () => {
  return (
    <div className='base-footer-links'>
      {footerLinks.map(({ link, name }: HeaderLinksI) => (
        <NavLink className='base-footer-links__link' key={link} to={link}>
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default BaseFooterLinks;
