import iconTime from '@/assets/icons/intro-times-icon.svg';
import iconHuman from '@/assets/icons/intro-human-icon.svg';
import iconCircle from '@/assets/icons/intro-circle-icon.svg';
import iconStar from '@/assets/icons/intro-star-icon.svg';
import iconAlarm from '@/assets/icons/intro-alarm-icon.svg';
import sand from '@/assets/images/sand.png';
import sandMobile from '@/assets/images/sandMobile.png';
import ballast from '@/assets/images/ballast.png';
import ballastMobile from '@/assets/images/ballastMobile.png';
import asphaltCrumb from '@/assets/images/asphaltCrumb.png';
import asphaltCrumbMobile from '@/assets/images/asphaltCrumbMobile.png';
import rental from '@/assets/images/rental.png';
import rentalMobile from '@/assets/images/rentalMobile.png';

export const introData = {
  title: 'Почему выбирают нас',
  qualities: [
    {
      iconSrc: iconTime,
      text: 'Мы работаем с <span class="green">2000</span> года',
    },
    {
      iconSrc: iconHuman,
      text: 'Более <span class="green">5000</span> </br> счастливых клиентов',
    },
    {
      iconSrc: iconCircle,
      text: 'Лучшие цены',
    },
    {
      iconSrc: iconStar,
      text: 'Качественная продукция',
    },
    {
      iconSrc: iconAlarm,
      text: 'Оперативность',
    },
  ],
};

export const catalogData = {
  title: 'Основные материалы',
  cards: [
    {
      imgSrc: sand,
      imgSrcMobile: sandMobile,
      text: 'Песок',
    },
    {
      imgSrc: ballast,
      imgSrcMobile: ballastMobile,
      text: 'Щебень',
    },
    {
      imgSrc: asphaltCrumb,
      imgSrcMobile: asphaltCrumbMobile,
      text: 'Асфальтная крошка',
    },
    {
      imgSrc: rental,
      imgSrcMobile: rentalMobile,
      text: 'Аренда техники',
    },
  ],
};

export const aboutCompanyData = {
  textBlock: {
    title: 'О компании СПЕЦ-ТРАНС',
    text: 'Наша фирма существует уже многие годы, заработав репутацию на рынке предлагаемых услуг как надежного и ответственного партнера. В число наших клиентов вошли крупнейшие организации. При этом стоит отметить, что на индивидуальный подход при заказе наших услуг могут рассчитывать как крупные компании, так и частные лица.',
  },
  numberBlock: [
    {
      text: 'Единиц техники',
      number: 60,
    },
    {
      text: 'Карьеров',
      number: 15,
    },
  ],
};
