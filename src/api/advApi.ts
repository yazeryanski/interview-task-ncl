import { getAdverts, updateAdverts } from '@/services/storage';
import type { IAdvert } from '@/types/avdert';
import { advertListMock } from '@/api/mocks/advMock';

export default {
  getAdverts(): Promise<IAdvert[]> {
    const storageAdverts = getAdverts();

    if (storageAdverts.length > 0) {
      return Promise.resolve(storageAdverts);
    }

    updateAdverts(advertListMock);
    
    return Promise.resolve(advertListMock);
  },
  addAdvert(advert: IAdvert): Promise<void>{
    const adverts = getAdverts();
    
    adverts.push(advert);
    updateAdverts(adverts);

    return Promise.resolve();
  }
}