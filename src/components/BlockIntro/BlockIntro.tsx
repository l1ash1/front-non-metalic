import React from 'react';

import Container from '@/components/Container';
import SvgComponent from '@/components/SvgComponent';

import './BlockIntro.scss';

interface Props {
  title: string;
  qualities: {
    iconSrc: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text: string;
  }[];
}

const BlockIntro = ({ title, qualities }: Props) => {
  return (
    <div className='block-intro'>
      <Container>
        <div className='block-intro__container'>
          <div className='block-intro__title'>{title}</div>
          <div className='block-intro__qualities-list'>
            {qualities.map(({ iconSrc, text }) => (
              <div key={text} className='block-intro__qualities-list__item'>
                <div className='block-intro__qualities-list__item__icon'>
                  <SvgComponent svg={iconSrc} width={20} height={20} />
                </div>
                <div
                  className='block-intro__qualities-list__item__text'
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockIntro;
