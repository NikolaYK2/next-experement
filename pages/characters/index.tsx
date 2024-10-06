import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";
import Link from "next/link";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";
import {charactersApi, CharactersType} from "@/features/characters/api/charactersApi";

export const getStaticProps = async () => {//асинхронная операция которая вызывается перед рендером компоненты
  const characters = await charactersApi.getCharacters()
  return {
    props: {
      characters: characters
    }
  }
}

type Props = {
  characters: CharactersType[]
}
const Characters = ({characters}: Props) => {

  return (
    <>
      <HeadersApp title={'Characters'}/>
      {characters && characters.map((char) => (
        <Link href={`/characters/${char.id}`} key={char.id}><CharacterCard status={char.status}
                                                                           name={char.name}
                                                                           image={char.image}
                                                                           id={char.id}/></Link>
      ))}
    </>
  );
}

Characters.getLayout = getLayout
export default Characters



