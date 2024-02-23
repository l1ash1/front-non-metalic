import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

import useBreakpoints from '@/hooks/useBreakpoints';
import SvgComponent from '@/components/SvgComponent';

import iconStar from '@/assets/icons/delivery-star-icon.svg';
import './DeliveryBlock.scss';
import Container from '@/components/Container';

const steps = [
  {
    id: 1,
    text: 'Вы оставляете заявку через сайт или по телефону.',
  },
  {
    id: 2,
    text: 'Мы производим точный расчет стоимости',
  },
  {
    id: 3,
    text: 'Осуществляем поставку заказанного вами материала точно в срок',
  },
  {
    id: 4,
    text: 'Соблюдаем своевременный документооборот',
  },
];

const contacts = [
  {
    id: 1,
    mainText: 'г. Элиста',
    text: 'Проспект Свободы, д.3',
  },
  {
    id: 2,
    mainText: '+7 800 808 08 08',
    text: 'Ежедневно с 08:00 до 24:00',
  },
];

interface StepI {
  id: number;
  text: string;
}

interface contactI {
  id: number;
  mainText: string;
  text: string;
}

const DeliveryBlock = () => {
  const { isMd, isLg, isXl, isXXl } = useBreakpoints();
  let size;
  if (isXXl) {
    size = 750;
  } else if (isXl) {
    size = 600;
  } else if (isLg) {
    size = 500;
  } else if (isMd) {
    size = 400;
  } else {
    size = 350;
  }
  const mapSize = {
    width: size,
    height: size,
  };

  return (
    <div className='delivery-block'>
      <Container>
        <div className='delivery-block__container'>
          <div className='delivery-block__text'>
            <div className='delivery-block__text__about-delivery'>
              <h4 className='delivery-block__text__about-delivery__title'>
                Доставка
              </h4>
              <div className='delivery-block__text__about-delivery__text'>
                Основная миссия компании Юг-Спец-транс — комплексные поставки
                нерудных материалов для корпоративных клиентов и частных лиц. Мы
                осуществлем доставку по югу Российской Федерации.
              </div>
            </div>
            <div className='delivery-block__text__steps-delivery'>
              {steps.map((step: StepI) => (
                <div
                  key={step.id}
                  className='delivery-block__text__steps-delivery__step'
                >
                  <div className='delivery-block__text__steps-delivery__step__icon'>
                    <SvgComponent svg={iconStar} width={20} height={20} />
                  </div>
                  <span className='delivery-block__text__steps-delivery__step__text'>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
            <div className='delivery-block__text__contacts-company'>
              {contacts.map((contact: contactI) => (
                <div
                  key={contact.id}
                  className='delivery-block__text__contacts-company__contact'
                >
                  <div className='delivery-block__text__contacts-company__contact__container'>
                    <div className='delivery-block__text__contacts-company__contact__main-text'>
                      {contact.mainText}
                    </div>
                    <div className='delivery-block__text__contacts-company__contact__text'>
                      {contact.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <YMaps>
            <div className='delivery-block__delivery-map'>
              <Map
                defaultState={{
                  center: [46.307707, 44.269752],
                  zoom: 6,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
                width={mapSize.width}
                height={mapSize.height}
              >
                {/*Элиста*/}
                <Placemark defaultGeometry={[46.307707, 44.269752]}/>
                {/*Волгоград*/}
                <Placemark defaultGeometry={[48.707067, 44.516975]}/>
                {/*Ростов-на-Дону*/}
                <Placemark defaultGeometry={[47.222119, 39.720286]}/>
                {/*Ставрополь*/}
                <Placemark defaultGeometry={[45.043280, 41.969011]}/>
                {/*Астрахань*/}
                <Placemark defaultGeometry={[46.347650, 48.030130]}/>
              </Map>
            </div>
          </YMaps>
        </div>
      </Container>
    </div>
  );
};

export default DeliveryBlock;
