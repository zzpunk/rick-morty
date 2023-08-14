import { PagesTypes, IPageData } from './Routes.interfaces';

export const pages: { [key in PagesTypes]: IPageData } = {
  [PagesTypes.HOME]: {
    title: 'Домашняя',
    path: '/home',
  },
  [PagesTypes.CHARACTERS]: {
    title: 'Персонажи',
    path: `/characters`,
  },
};
