import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {CharactersType} from "@/features/characters/api/charactersApi";

const useCharacter = (): CharactersType | null => {
  const [character, setCharacter] = useState<CharactersType | null>(null)

  const router = useRouter();//из next router

  useEffect(() => {
    axios.get<{
      data: { results: CharactersType }
    }>(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character/${router.query.id}`)//id в название файла
      .then(res => {

        setCharacter(res.data.data.results)
      })
  }, []);

  return character
}