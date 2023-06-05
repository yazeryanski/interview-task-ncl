import type { IAdvert } from '@/types/avdert';
import { advertListMock } from '@/api/mocks/advMock';
import { getAdverts, updateAdverts } from '@/services/adverts/adverts';
import type { IFilter } from '@/services/adverts/adverts';
import { getFilteredAdverts } from '@/helpers/adverts/filter';

export default {
  getAdverts(filter?: IFilter): Promise<IAdvert[]> {
    const storageAdverts = getAdverts();
    let result:IAdvert[] = [];

    if (storageAdverts.length > 0) {
      result = storageAdverts;
    } else {
      result = advertListMock;
      updateAdverts(advertListMock);
    }

    result = filter ? getFilteredAdverts(result, filter) : result;
    return Promise.resolve(result);
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