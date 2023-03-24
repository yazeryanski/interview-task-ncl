import type { ICity } from '@/types/city';
import { citiesMock } from './mocks/cityMock';

export default {
  getCities(): Promise<ICity[]> {
    return Promise.resolve(citiesMock);
  }
}