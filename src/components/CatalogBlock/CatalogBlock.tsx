import Container from '@/components/Container';
import useBreakpoints from '@/hooks/useBreakpoints';

import './CatalogBlock.scss';

interface Props {
  title: string;
  cards: {
    imgSrc: string;
    imgSrcMobile: string;
    text: string;
  }[];
}

const CatalogBlock = ({ title, cards }: Props) => {
  const { isLg } = useBreakpoints();

  return (
    <div className='catalog-block'>
      <Container>
        <div className='catalog-block__title'>{title}</div>
        <div className='catalog-block__cards'>
          {cards.map(({ imgSrc, imgSrcMobile, text }) => (
            <div key={text} className='catalog-block__cards__card'>
              <img src={isLg ? imgSrc : imgSrcMobile} alt='img' />
              <div className='catalog-block__cards__card__name'>{text}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CatalogBlock;
