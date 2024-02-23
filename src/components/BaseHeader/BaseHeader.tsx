import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from '@/components/Container';
import { AppRoutes } from '@/router/routes';
import BaseHeaderLinks from './components/BaseHeaderLinks';
import BurgerButton from './components/BurgerButton';
import BaseHeaderLinksMobile from './components/BaseHeaderLinksMobile';
import useBreakpoints from '@/hooks/useBreakpoints';
import { lockBodyScroll } from '@/helpers/scrollHelpers';

import logo from '@/assets/images/logoHeader.png';
import './BaseHeader.scss';

const BaseHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLg } = useBreakpoints();
  const location = useLocation();

  const onToggleHeader = () => {
    lockBodyScroll(!isOpen);
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    isOpen && onToggleHeader();
  }, [location]);

  return (
    <div className='base-header'>
      <Container>
        <div className='base-header__container'>
          <div className='base-header__logo-block'>
            <Link
              to={AppRoutes.Main.path}
              className='base-header__logo-block__logo'
            >
              <img src={logo} alt='logo' />
            </Link>
          </div>
          {isLg ? (
            <BaseHeaderLinks />
          ) : (
            <div
              className='base-header__burger-button'
              onClick={onToggleHeader}
            >
              <BurgerButton isOpen={isOpen} />
            </div>
          )}
        </div>
      </Container>
      {isOpen && !isLg && <BaseHeaderLinksMobile />}
    </div>
  );
};

export default BaseHeader;
