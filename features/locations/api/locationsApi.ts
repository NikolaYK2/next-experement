import {instance} from "@/api/instance";
import {Response} from "@/features/characters/api/charactersApi";

export type LocationRes = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export const locationsApi = {
  async getLocations() {
    return instance.get<Response<LocationRes[]>>('/location')
      .then(res => res.data.results)
  }
}