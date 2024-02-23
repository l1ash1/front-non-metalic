import SvgComponent from '@/components/SvgComponent';

import vkIcon from '@/assets/icons/vk-icon.svg';
import facebookIcon from '@/assets/icons/facebook-icon.svg';
import whatsappIcon from '@/assets/icons/whatsapp-icon.svg';
import './BaseFooterSocMediaLinks.scss';

const footerContacts = [
  {
    link: 'https://vk.com/li_ashi',
    imgSrc: vkIcon,
  },
  {
    link: 'https://vk.com/li_ashi',
    imgSrc: facebookIcon,
  },
  {
    link: 'https://vk.com/li_ashi',
    imgSrc: whatsappIcon,
  },
];

const BaseFooterSocMediaLinks = () => {
  return (
    <div className='base-footer-soc-media-links'>
      {footerContacts.map(({ link, imgSrc }, index) => (
        <a
          key={index}
          className='base-footer-soc-media-links__link'
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          <SvgComponent svg={imgSrc} width={20} height={20} />
        </a>
      ))}
    </div>
  );
};

export default BaseFooterSocMediaLinks;
