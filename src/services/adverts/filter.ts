import { citiesMock } from '@/api/mocks/cityMock';
import { AdvertServiceType } from '@/enums/advertServiceType';
import type { Country } from '@/enums/countries';

export const getCities = (country?: string): string[] => {
  const cities: string[] = [];
  
  for (let i = 0; i < citiesMock.length; i++) {
    const cityObj = citiesMock[i];
    
    if(!country) {
      cities.push(cityObj.name);
      continue;
    }

    if(cityObj.country === country) {
      cities.push(cityObj.name)
    }
  }

  return cities;
};

export const getCountries = (city?: string): string[] => {
  const countries = new Set<Country>();

  for (let i = 0; i < citiesMock.length; i++) {
    const cityObj = citiesMock[i];

    if(!city) {
      countries.add(cityObj.country);
      continue;
    }

    if (cityObj.name === city) {
      countries.add(cityObj.country);
    }
  }

  return Array.from(countries);
};

export const getCategories = (): string[] => {
  const keys = Object.keys(AdvertServiceType) as (keyof typeof AdvertServiceType)[];

  return keys.map((k) => AdvertServiceType[k]);
};
