import {instance} from "@/pages/api/instance";
import {Response} from "@/pages/characters/api/charactersApi";


export type EpisodesRes = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
export const episodesApi = {
  async getEpisodes() {
    return instance.get<Response<EpisodesRes[]>>('/episode')
      .then(res => res.data.results)
  }
}