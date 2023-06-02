import type { AdvertServiceType } from '@/enums/advertServiceType';
import type { ICity } from './city';
import type { IUser } from './user';
import type { DateType } from './common';

export interface IAdvert {
  id: number;
  city: ICity;
  serviceType: AdvertServiceType;
  date: DateType;
  header: string;
  post: string;
  user: IUser;
}