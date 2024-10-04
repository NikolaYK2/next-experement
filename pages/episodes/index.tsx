import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import Link from "next/link";
import {episodesApi, EpisodesRes} from "@/pages/episodes/api/episodesApi";
import {Card} from "@/components/ui/card/Card";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";

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
          <Card name={episode.name}/>
        </Link>
      ))}
    </>
  );
}

Episodes.getLayout = getLayout
export default Episodes



