import {instance} from "@/pages/api/instance";

export type Response<T = {}> = {
  results: T
}
export type CharactersType = {
  id: number,
  name: string,
  image: string
}
export const charactersApi = {
  async getCharacters() {
    return instance.get<Response<CharactersType[]>>('/character').then(res => res.data.results)
  }
}