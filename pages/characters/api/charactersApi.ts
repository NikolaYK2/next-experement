import {instance} from "@/api/instance";

export type Response<T = {}> = {
  results: T
}
export type StatusType = 'Alive' | 'Dead' | 'unknown'

export type CharactersType = {
  id: number,
  name: string,
  image: string
  status: StatusType
}
export const charactersApi = {
  async getCharacters() {
    return instance.get<Response<CharactersType[]>>('/character').then(res => res.data.results)
  },
  async getCharacter(id: string) {
    return instance.get<CharactersType>(`/character/${id}`).then(res => res.data)
  }
}