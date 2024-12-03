import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import Link from "next/link";
import {Card} from "@/components/ui/card/Card";
import {EpisodesRes} from "@/features/episodes/api/episodesApi";
import {Response} from "@/features/characters/api/charactersApi";
import {notFound} from "next/navigation";

const getEpisodes = async (): Promise<Response<EpisodesRes[]>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`,{
    //ревалидэйтим запрос, делаем новый запрос через 60 сек
    next:{revalidate: 60}
    // next:{revalidate: 0} - ничего не кэшируем
  })

  return await res.json()
}
export default async function Episodes() {
  const {results} = await getEpisodes()

  if (!results) notFound()

  return (
    <>
      <HeadersApp title={'Characters'}/>
      {results && results.map((episode) => (
        <Link href={`/episodes/${episode.id}`} key={episode.id}>
          <Card name={episode.name}/>
        </Link>
      ))}
    </>
  );
}


