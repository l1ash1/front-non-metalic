import Container from '@/components/Container';
import MainButton from '@/components/MainButton';
import BlockIntro from '@/components/BlockIntro';
import CatalogBlock from '@/components/CatalogBlock';
import AboutCompany from '@/components/AboutCompany';
import FormBlock from '@/components/FormBlock';
import DeliveryBlock from '@/components/DeliveryBlock';

import { introData, catalogData, aboutCompanyData } from './data';
import './PageMain.scss';

const PageMain = () => {
  return (
    <div className='main-page'>
      <div className='main-page__first-block'>
        <Container>
          <div className='main-page__first-block__container'>
            <div className='main-page__first-block__title'>
              Продажа и доставка нерудных материалов
            </div>
            <div className='main-page__first-block__text'>
              У нас вы можете заказать материалы премиального качества.
              Индивидуальный подход и качественная продукция – ключевые
              преимущества нашей компании.
            </div>
            <MainButton text='Заказать звонок' />
          </div>
        </Container>
      </div>
      <BlockIntro title={introData.title} qualities={introData.qualities} />
      <CatalogBlock title={catalogData.title} cards={catalogData.cards} />
      <AboutCompany
        textBlock={aboutCompanyData.textBlock}
        numberBlock={aboutCompanyData.numberBlock}
      />
      <FormBlock />
      <DeliveryBlock />
    </div>
  );
};

export default PageMain;
