import {instance} from "@/api/instance";
import {Response} from "@/features/characters/api/charactersApi";


export type EpisodesRes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export const episodesApi = {
  async getEpisodes() {
    return instance.get<Response<EpisodesRes[]>>('/episode')
      .then(res => res.data.results)
  }
}