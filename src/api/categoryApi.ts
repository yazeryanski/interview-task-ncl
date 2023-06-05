import { AdvertServiceType } from "@/enums/advertServiceType";

export default {
  getCategories(): Promise<string[]> {
    const keys = Object.keys(AdvertServiceType) as (keyof typeof AdvertServiceType)[];
  
    return Promise.resolve(keys.map((k) => AdvertServiceType[k]));
  }
}