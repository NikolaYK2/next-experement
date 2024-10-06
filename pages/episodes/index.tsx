import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import Link from "next/link";
import {Card} from "@/components/ui/card/Card";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";
import {episodesApi, EpisodesRes} from "@/features/episodes/api/episodesApi";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async ({res}) => {//вызывается каждый раз когда запрашивается страница, означает что запрашиваемые данные динамические
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=100')//кэшируем на 100 сек

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



