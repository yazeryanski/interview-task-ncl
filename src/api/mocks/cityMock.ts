import { Country } from '@/enums/countries';
import type { ICity } from '@/types/city';

export const citiesMock: ICity[] = [
  {
    country: Country.georgia,
    name: 'Tbilisi',
  },
  {
    country: Country.georgia,
    name: 'Batumi',
  },
  {
    country: Country.poland,
    name: 'Varshava',
  },
  {
    country: Country.serbia,
    name: 'Belgrad',
  },
  {
    country: Country.thailand,
    name: 'Phuket',
  },
  {
    country: Country.ukraine,
    name: 'Kiev',
  },
]