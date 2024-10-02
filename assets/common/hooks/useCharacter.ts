import {useEffect, useState} from "react";
import axios from "axios";
import {CharactersType} from "@/assets/common/hooks/useCharacters";
import {useRouter} from "next/router";

export const useCharacter = (): CharactersType | null => {
  const [character, setCharacter] = useState<CharactersType>(null)

  const router = useRouter();//из next router

  useEffect(() => {
    axios.get<{
      data: { results: CharactersType }
    }>(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character/${router.query.id}`)//id в название файла
      .then(res => {

        setCharacter(res.data)
      })
  }, []);

  return character
}