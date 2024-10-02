import {useEffect, useState} from "react";
import axios from "axios";

export type CharactersType = {
  id: number,
  name: string,
  image: string
}
export const useCharacters = (): CharactersType[] | null => {
  const [characters, setCharacters] = useState<CharactersType[] | null>(null)

  useEffect(() => {
    axios.get<{ results: CharactersType[] }>(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)
      .then(res => {
        setCharacters(res.data.results)
      })
  }, []);

  return characters
}