import React from 'react';
import Image from "next/image";
import s from "./CharacterCard.module.scss";
import success from '@/public/statuses/green.png'
import dead from '@/public/statuses/red.png'
import unk from '@/public/statuses/unk.png'
import {Status} from "@/components/ui/status/Status";
import {CharactersType} from "@/pages/characters/api/charactersApi";


const statusImage = {
  Alive: success,
  Dead: dead,
  unknown: unk
}
export const CharacterCard = ({name, image, status}: CharactersType) => {

  return (
    <div className={s.blockItem}>
      <Status src={statusImage[status]}/>
      {/*<Image src={'/statuses/green.png'} alt={''} width={80} height={80} />*/}
      {/*если картинка экспортируется на прямую то рамеры можно не писать если пододят*/}
      {/*<Image src={success} alt={''} className={s.imagStatus}/>*/}
      <div>{name}</div>
      <Image src={image} alt={`Picture of ${name}`} width={300} height={200}/>
    </div>
  );
};
