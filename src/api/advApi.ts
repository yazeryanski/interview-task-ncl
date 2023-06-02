import { getAdverts, updateAdverts } from '@/services/storage';
import type { IAdvert } from '@/types/avdert';
import { advertListMock } from '@/api/mocks/advMock';

export default {
  // TODO: add filter
  getAdverts(): Promise<IAdvert[]> {
    const storageAdverts = getAdverts();

    if (storageAdverts.length > 0) {
      return Promise.resolve(storageAdverts);
    }

    updateAdverts(advertListMock);

    return Promise.resolve(advertListMock);
  },
  addAdvert(advert: IAdvert): Promise<void> {
    const adverts = getAdverts();

    adverts.push(advert);
    updateAdverts(adverts);

    return Promise.resolve();
  },
  editAdvert(advert: IAdvert): Promise<void> {
    const adverts = getAdverts()
    const [updatedItem] = adverts.filter((currentAdvert) => currentAdvert.id === advert.id)

    adverts[adverts.indexOf(updatedItem)] = advert

    updateAdverts(adverts)

    return Promise.resolve()
  },
  removeAdvert(advertId: number): Promise<void> {
    const adverts = getAdverts()
    const updatedAdverts = adverts.filter((advert) => advert.id !== advertId)

    updateAdverts(updatedAdverts)
    return Promise.resolve()
  }
}