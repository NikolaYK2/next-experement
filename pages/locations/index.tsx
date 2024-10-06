import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import Link from "next/link";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {Card} from "@/components/ui/card/Card";
import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";
import {LocationRes, locationsApi} from "@/features/locations/api/locationsApi";

export const getStaticProps = async () => {//вызывается каждый раз когда запрашивается страница, означает что запрашиваемые данные динамические
  const queryClient = new QueryClient();

  await queryClient.fetchQuery({queryKey: ['locations'], queryFn: locationsApi.getLocations})

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Locations = () => {

  const {data: locations, isLoading, error} = useQuery<LocationRes[], Error>({
    queryKey: ['locations'],  // Ключ для кэширования
    queryFn: locationsApi.getLocations      // Функция для получения данных
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading locations</div>;

  if (!locations) return null;
  return (
    <>
      <HeadersApp title={'Characters'}/>
      {locations && locations.map((location) => (
        <Link href={`/locations/${location.id}`} key={location.id}>
          <Card name={location.name}/>
        </Link>
      ))}
    </>
  );
}

Locations.getLayout = getLayout
export default Locations



