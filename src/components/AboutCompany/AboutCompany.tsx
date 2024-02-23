import Container from '@/components/Container';

import './AboutCompany.scss';

interface Props {
  textBlock: {
    title: string;
    text: string;
  };
  numberBlock: {
    text: string;
    number: number;
  }[];
}

const AboutCompany = ({ textBlock, numberBlock }: Props) => {
  return (
    <div className='about-company'>
      <Container>
        <div className='about-company__container'>
          <div className='about-company__text-block'>
            <div className='about-company__text-block__title'>
              {textBlock.title}
            </div>
            <div className='about-company__text-block__text'>
              {textBlock.text}
            </div>
          </div>
          <div className='about-company__number-block'>
            <div className='about-company__number-block__container'>
              {numberBlock.map(({ number, text }) => (
                <div key={text} className='about-company__number-block__number'>
                  <span>{number}</span>
                  <h4>{text}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutCompany;
