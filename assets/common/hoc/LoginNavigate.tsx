import React, {PropsWithChildren} from 'react';
import {useRouter} from "next/router";

type LoginNavigateProps = PropsWithChildren
export const LoginNavigate = ({children}: LoginNavigateProps) => {
  const router = useRouter();

  const isAuth = true //запрос за данными пользователями

  if (!isAuth) router.push("/test");

  return <>{children}</>
};
