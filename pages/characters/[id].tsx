import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";
import {charactersApi, CharactersType} from "@/pages/characters/api/charactersApi";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {//используется в связке getStaticProps, генерирует пути а getStaticProps странички
  const result = await charactersApi.getCharacters()

  const paths = result.map(character => ({params: {id: String(character.id)}}))

  return {
    paths,
    fallback: true
  }
}
export const getStaticProps: GetStaticProps = async ({params}) => {//асинхронная операция которая вызывается перед рендером компоненты
  const {id} = params || {}

  const character = await charactersApi.getCharacter(id as string)

  if (!character) return {notFound: true}

  return {
    props: {
      character
    }
  }
}

type CharacterProps = {
  character: CharactersType
}
const Character = ({character}: CharacterProps) => {

  const router = useRouter()

  const characterId = router.query.id//берем как называется наш файл [id] [param]- значит был бы param

  const handlerGoTo = () => router.push('/characters')

  if (router.isFallback) return <h1>Loading...</h1>//ждем пока згенирируется страничка

  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
      <HeadersApp title={'Character'}/>

      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>ID: {characterId}</div>

      {character && <CharacterCard image={character.image} name={character.name} id={character.id}/>}

      <button style={{textAlign: 'center', borderRadius: 10}} onClick={handlerGoTo}>GO TO CHARACTERS</button>
    </section>
  );
}

Character.getLayout = getLayout
export default Character
