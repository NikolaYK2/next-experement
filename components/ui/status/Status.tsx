import React from 'react';
import Image, {StaticImageData} from "next/image";
import s from './Status.module.scss'


type StatusProps = {
  src: StaticImageData //именно так типизироват ькартинки если передаем статические через пропсы
}
export const Status = ({src}: StatusProps) => {

  return (
    <>
      {/*при дабавлении параметра fill картинка заполнит весь родительский элемент*/}
      <Image className={s.imagStatus} src={src} alt={''} width={80} height={80}/>
    </>
  );
};
