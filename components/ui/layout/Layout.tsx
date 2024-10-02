import React, {PropsWithChildren, ReactElement} from 'react';
import {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {NavBar} from "@/components/ui/navBar/NavBar";

const Layout: NextPage<PropsWithChildren> = (props) => {
  const {children} = props
  return (
    <main className={`${styles.main}`}>
      <NavBar/>
      {children}
    </main>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}