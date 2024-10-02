import {HeadersApp} from "@/components/ui/headersApp/HeadersApp";
import {getLayout} from "@/components/ui/layout/Layout";


function Home() {
  return (
    <>
      <HeadersApp title={'Create Next App'}/>
    </>
  );
}

//оборачиваем нашу страницу функцией
Home.getLayout = getLayout
export default Home

