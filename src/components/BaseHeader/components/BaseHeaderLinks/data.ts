import { AppRoutes } from '@/router/routes';

export const headerLinks = [
  {
    name: 'Услуги',
    link: AppRoutes.Services.path,
  },
  {
    name: 'Материалы',
    link: AppRoutes.Materials.path,
  },
  {
    name: 'Доставка и оплата',
    link: AppRoutes.Delivery.path,
  },
  {
    name: 'О компании',
    link: AppRoutes.AboutCompany.path,
  },
  {
    name: 'Контакты',
    link: AppRoutes.Contacts.path,
  },
];
