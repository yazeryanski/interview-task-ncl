import type { AdvertHeading } from '@/enums/advertHeading';
import type { ICity } from './city';
import type { IUser } from './user';

export interface IAdvert {
  city: ICity;
  heading: AdvertHeading;
  date: Date;
  post: string;
  user: IUser;
}