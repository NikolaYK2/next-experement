import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {CharactersType, Response} from "@/features/characters/api/charactersApi";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";
import {Metadata} from "next";

const getCharacters = async (): Promise<Response<CharactersType[]>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`)

  return await res.json()
}
const getCharacter = async (id: string): Promise<CharactersType> => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character/${id}`)

  return await res.json()
}


//генерация путей, я так понимаю типо каждая страничка для каждой карточки с id
export async function generateStaticParams() {
  const {results} = await getCharacters();
//генерируем свойства так же как называется папка то есть только id так как папка [id]
  return results.map(character => ({id: String(character.id)}));
}


type Params = {
  id: string,
}
type Props = {
  params: Params;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  return {
    title: `Character ${params.id}`,
    description: 'Character\'s people'
  }
}

export default async function Character({params}: Props) {
  // const {back} = useRouter()
  // console.log(useParams())

  const {id, status, name, image} = await getCharacter(params.id)

  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
      <HeadersApp title={'Character'}/>

      <h2 style={{width: '100%', display: 'flex', justifyContent: 'center'}}>ID: {params.id}</h2>

      {/*{results &&*/}
      <CharacterCard status={status} image={image ?? null} name={name} id={Number(id)}/>

      {/*<button style={{textAlign: 'center', borderRadius: 10}} onClick={() => back()}>GO TO CHARACTERS</button>*/}
    </section>
  );
}
