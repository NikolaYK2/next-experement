import React, {PropsWithChildren} from 'react';
import {Metadata, NextPage} from "next";
import {BaseLayout} from "@/components/ui/layout/base/BaseLayout";

export const metadata: Metadata = {
  title: "Characters",
  description: 'Characters people'
}

const Layout: NextPage<PropsWithChildren> = ({children}) => {
  return <BaseLayout>{children}</BaseLayout>
};

export default Layout
