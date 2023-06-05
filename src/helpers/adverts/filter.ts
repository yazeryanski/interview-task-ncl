import type { IAdvert } from "@/types/avdert";
import type { IFilter } from "@/services/adverts/adverts";

export const getFilteredAdverts = (adverts: IAdvert[], filter: IFilter) => {
  return adverts.filter((ad) => {
    if (filter.country && ad.city.country !== filter.country) return false;
    if (filter.city && ad.city.name !== filter.city) return false;
    if (filter.category && ad.serviceType !== filter.category) return false;

    return true;
  });
};