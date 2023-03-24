import type { IAdvert } from '@/types/avdert';

const itemNames = {
  adverts: 'adverts',
};

export const getAdverts = (): IAdvert[] => {
  const json = localStorage.getItem(itemNames.adverts);
  const adverts = json ? JSON.parse(json) : [];
  return adverts as IAdvert[];
};

export const updateAdverts = (adverts: IAdvert[]): void => {
  localStorage.setItem(itemNames.adverts, JSON.stringify(adverts));
}