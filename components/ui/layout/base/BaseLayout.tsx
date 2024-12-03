import React, {PropsWithChildren} from 'react';
import {NextPage} from "next";

export const BaseLayout: NextPage<PropsWithChildren> = ({children}) => {

  return <div>{children}</div>

};

