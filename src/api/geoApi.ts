import type { ICity } from '@/types/city';
import { citiesMock } from './mocks/cityMock';

// Singletone pattern
let cities: ICity[] = [];

export default {
  getCities(): Promise<ICity[]> {
    if (cities.length) return Promise.resolve(cities);

    cities = citiesMock;
    return Promise.resolve(cities);
  }
}