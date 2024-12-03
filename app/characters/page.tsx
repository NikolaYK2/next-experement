import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import Link from "next/link";
import {CharactersType, Response} from "@/features/characters/api/charactersApi";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";

const getCharacters = async (): Promise<Response<CharactersType[]>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)

  return await res.json()
}
export default async function Characters() {
  const {results} = await getCharacters()

  return (
    <>
      <HeadersApp title={'Characters'}/>
      {results && results.map((char) => (
        <Link href={`/characters/${char.id}`} key={char.id}><CharacterCard status={char.status}
                                                                           name={char.name}
                                                                           image={char.image}
                                                                           id={char.id}/></Link>
      ))}
    </>
  );
}



