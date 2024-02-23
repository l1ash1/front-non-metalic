import { NavLink } from 'react-router-dom';

import { headerLinks } from './data';
import './BaseHeaderLinksMobile.scss';

interface HeaderLinksI {
  link: string;
  name: string;
}

const BaseHeaderLinksMobile = () => {
  return (
    <div className='base-header-links-mobile'>
      {headerLinks.map(({ link, name }: HeaderLinksI) => (
        <NavLink className='base-header-links__link' key={link} to={link}>
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default BaseHeaderLinksMobile;
