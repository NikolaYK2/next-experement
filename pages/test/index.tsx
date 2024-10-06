import {getLayout} from "@/components/ui/layout/baseLayout/BaseLayout";
import * as path from "node:path";
import * as process from "node:process";
import * as fs from "fs/promises";

export const getStaticProps = async () => {

  const getParsedData = async (): Promise<{ title: string }> => {
    const filePath = path.join(process.cwd(), 'public', 'staticData.json');//пишем путь до файла, обязательно через запятые, process.cwd() - создаст путь

    try {
      const jsonData = await fs.readFile(filePath)//читаем файл
      return JSON.parse(jsonData.toString());
    } catch (e) {
      return {title: 'no title'}
    }
  }

  const {title} = await getParsedData()

  return {
    props: {
      title
    },
  }
}

type TestProps = {
  title: string
}
const Test = ({title}: TestProps) => {

  return <div>{title}</div>
}

Test.getLayout = getLayout
export default Test



