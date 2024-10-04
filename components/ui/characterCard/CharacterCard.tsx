import React from 'react';
import Image from "next/image";
import {CharactersType} from "@/assets/common/hooks/useCharacters";
import s from "./CharacterCard.module.scss";

export const CharacterCard = ({name, image, id}: CharactersType) => {
  return (
    <div className={s.blockItem}>
      <div>{name}</div>
      <Image src={image} alt={`Picture of ${name}`} width={300} height={200}/>

    </div>
  );
};
