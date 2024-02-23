import logo from '@/assets/images/logoFooter.png';

import './BaseFooterLogo.scss';

const BaseFooterLogo = () => {
  return (
    <div className='base-footer-logo'>
      <img src={logo} alt='logo' />
    </div>
  );
};

export default BaseFooterLogo;
