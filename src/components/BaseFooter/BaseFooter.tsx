import Container from '@/components/Container';
import BaseFooterLinks from './components/BaseFooterLinks';
import BaseFooterNumber from './components/BaseFooterNumber';
import BaseFooterLogo from './components/BaseFooterLogo';
import BaseFooterText from './components/BaseFooterText';
import BaseFooterSocMediaLinks from './components/BaseFooterSocMediaLinks';
import useBreakpoints from '@/hooks/useBreakpoints';

import './BaseFooter.scss';

const BaseFooter = () => {
  const { isLg } = useBreakpoints();

  return (
    <div className='base-footer'>
      <Container>
        <div className='base-footer__container'>
          {isLg ? (
            <>
              <BaseFooterLogo />
              <BaseFooterText />
              <BaseFooterLinks />
              <BaseFooterSocMediaLinks />
              <BaseFooterNumber />
            </>
          ) : (
            <div className='base-footer__mobile'>
              <div className='base-footer__mobile__top-container'>
                <BaseFooterLogo />
                <BaseFooterSocMediaLinks />
              </div>
              <div className='base-footer__mobile__middle-container'>
                <BaseFooterLinks />
                <BaseFooterNumber />
              </div>
              <div className='base-footer__mobile__bottom-container'>
                <BaseFooterText />
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BaseFooter;
