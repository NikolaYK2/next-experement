import React from 'react';
import Link from "next/link";
import s from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <div className={s.containerNavBar}>
      <Link href={'/'}>Main</Link>
      <Link href={'/characters'}>Characters</Link>
      <Link href={'/episodes'}>Episodes</Link>
      <Link href={'/locations'}>Locations</Link>
    </div>
  );
};
