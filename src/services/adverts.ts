import type { IAdvert } from '@/types/avdert';
import { advertListMock } from '@/api/mocks/advMock';

const itemNames = {
  adverts: 'adverts'
};

interface IFilter {
  country?: string;
  city?: string;
  keyword?: string;
}

export const getAdverts = (filter?: IFilter): IAdvert[] => {
  const json = localStorage.getItem(itemNames.adverts);
  const adverts: IAdvert[] = json ? JSON.parse(json) : [];

  return filter ? getFilteredAdverts(adverts, filter) : adverts;
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

  updateAdverts(advertListMock);
};

// Privete Methods
const getFilteredAdverts = (adverts: IAdvert[], filter: IFilter) => {
  return adverts.filter((ad) => {
    if (filter.country && ad.city.country !== filter.country) return false;
    if (filter.city && ad.city.name !== filter.city) return false;
    if (filter.keyword && ad.serviceType !== filter.keyword) return false;

    return true;
  });
};
