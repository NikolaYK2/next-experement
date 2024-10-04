import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";
import Link from "next/link";
import {charactersApi, CharactersType} from "@/pages/characters/api/charactersApi";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";

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
        <Link href={`/characters/${char.id}`} key={char.id}><CharacterCard name={char.name} image={char.image}
                                                                           id={char.id}/></Link>
      ))}
    </>
  );
}

Characters.getLayout = getLayout
export default Characters



