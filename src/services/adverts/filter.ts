import geoApi from '@/api/geoApi';
import categoryApi from '@/api/categoryApi';
import type { Country } from '@/enums/countries';

export const getCities = async (country?: string): Promise<string[]> => {
  const cities: string[] = [];
  const geoData = await geoApi.getCities();

  // We can also use modern Array methods but that will run 2 loops
  // ex: geoData.filter(...something).map(item => item.name)

  for (let i = 0; i < geoData.length; i++) {
    const cityObj = geoData[i];

    if (!country) {
      cities.push(cityObj.name);
      continue;
    }

    if (cityObj.country === country) {
      cities.push(cityObj.name);
    }
  }

  return cities;
};

export const getCountries = async (city?: string): Promise<string[]> => {
  const countries = new Set<Country>();
  const geoData = await geoApi.getCities();

  // We can also use modern Array methods but that will run 2 loops
  // ex: geoData.filter(...something).map(item => item.name)

  for (let i = 0; i < geoData.length; i++) {
    const cityObj = geoData[i];

    if (!city) {
      countries.add(cityObj.country);
      continue;
    }

    if (cityObj.name === city) {
      countries.add(cityObj.country);
    }
  }

  return Array.from(countries);
};

export const getCategories = (): Promise<string[]> => {
  return categoryApi.getCategories();
};
