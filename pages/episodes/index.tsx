import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {getLayout} from "@/components/ui/layout/Layout";
import {CharacterCard} from "@/components/ui/characterCard/CharacterCard";
import Link from "next/link";
import {episodesApi, EpisodesRes} from "@/pages/episodes/api/episodesApi";

export const getServerSideProps = async () => {//вызывается каждый раз когда запрашивается страница, означает что запрашиваемые данные динамические
  const episodes = await episodesApi.getEpisodes()

  if (!episodes) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      episodes
    }
  }
}

type Props = {
  episodes: EpisodesRes[]
}
const Episodes = ({episodes}: Props) => {

  return (
    <>
      <HeadersApp title={'Characters'}/>
      {episodes && episodes.map((episode) => (
        <Link href={`/episodes/${episode.id}`} key={episode.id}>
          <div>{episode.name}</div>
        </Link>
      ))}
    </>
  );
}

Episodes.getLayout = getLayout
export default Episodes



