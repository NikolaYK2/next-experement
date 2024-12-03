'use client'
import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import Link from "next/link";
import {Card} from "@/components/ui/card/Card";
import {LocationRes, locationsApi} from "@/features/locations/api/locationsApi";
import {useEffect, useState} from "react";

// export const getStaticProps = async () => {//вызывается каждый раз когда запрашивается страница, означает что запрашиваемые данные динамические
//   const queryClient = new QueryClient();
//
//   await queryClient.fetchQuery({queryKey: ['locations'], queryFn: locationsApi.getLocations})
//
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     }
//   }
// }

export default function  Locations ()  {
  const [locations, setLocations] = useState<LocationRes[]>();
  // const {data: locations, isLoading, error} = useQuery<LocationRes[], Error>({
  //   queryKey: ['locations'],  // Ключ для кэширования
  //   queryFn: locationsApi.getLocations      // Функция для получения данных
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading locations</div>;

  // if (!locations) return null;

  useEffect(() => {
    locationsApi.getLocations().then(locations => setLocations(locations))
  }, []);

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



