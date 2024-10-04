import React, {PropsWithChildren} from 'react';
import {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {NavBar} from "@/components/ui/navBar/NavBar";

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
  return (
    <section className={`${styles.main}`}>
      <NavBar/>
      <main style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {children}
      </main>
    </section>
  );
};

// export const getLayout = (page: ReactElement) => {
//   return <Layout>{page}</Layout>
// }