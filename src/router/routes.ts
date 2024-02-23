import { ComponentType, lazy } from 'react';

const PageMain = lazy(() => import('@/pages/PageMain'));
const PageServices = lazy(() => import('@/pages/PageMain'));
const PageMaterials = lazy(() => import('@/pages/PageMaterials'));
const PageDelivery = lazy(() => import('@/pages/PageMain'));
const PageAboutCompany = lazy(() => import('@/pages/PageMain'));
const PageContacts = lazy(() => import('@/pages/PageMain'));

export const AppRoutes = {
  Main: {
    path: '/',
    title: 'Главная',
    Component: PageMain,
  },
  Services: {
    path: '/services',
    title: 'Главная',
    Component: PageServices,
  },
  Materials: {
    path: '/materials',
    title: 'Главная',
    Component: PageMaterials,
  },
  Delivery: {
    path: '/delivery',
    title: 'Главная',
    Component: PageDelivery,
  },
  AboutCompany: {
    path: '/aboutcompany',
    title: 'Главная',
    Component: PageAboutCompany,
  },
  Contacts: {
    path: '/contacts',
    title: 'Главная',
    Component: PageContacts,
  },
};

export interface IRoute {
  path: string;
  title: string;
  Component: ComponentType<any>;
}
