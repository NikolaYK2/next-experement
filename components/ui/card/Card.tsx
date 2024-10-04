import React from 'react';
import s from './Card.module.scss'

type CardProps = {
  name: string;
}
export const Card = ({name}: CardProps) => {
  return (
    <div className={s.container}>
      {name}
    </div>
  );
};
