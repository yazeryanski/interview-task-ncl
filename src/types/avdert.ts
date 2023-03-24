import type { AdvertServiceType } from '@/enums/advertServiceType';
import type { ICity } from './city';
import type { IUser } from './user';

export interface IAdvert {
  id: number;
  city: ICity;
  serviceType: AdvertServiceType;
  date: Date;
  header: string;
  post: string;
  user: IUser;
}