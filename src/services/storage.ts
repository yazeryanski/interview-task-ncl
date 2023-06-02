import type { IAdvert } from '@/types/avdert';
import {advertListMock} from '@/api/mocks/advMock';

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
};

/**
 * @description fills local storage with adverts if they are empty
 */
export const migrateAdverts = (): void => {
  const storageAdverts = localStorage.getItem(itemNames.adverts);

  // skip if we already have adverts
  if (storageAdverts) return;
  
  updateAdverts(advertListMock)
}