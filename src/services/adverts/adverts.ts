import type { IAdvert } from '@/types/avdert';

const itemNames = {
  adverts: 'adverts'
};

export interface IFilter {
  country?: string;
  city?: string;
  category?: string;
}

export const getAdverts = (): IAdvert[] => {
  const json = localStorage.getItem(itemNames.adverts);
  const adverts: IAdvert[] = json ? JSON.parse(json) : [];

  return adverts;
};

export const updateAdverts = (adverts: IAdvert[]): void => {
  localStorage.setItem(itemNames.adverts, JSON.stringify(adverts));
};
