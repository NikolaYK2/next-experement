import "@/styles/globals.css";
//сюда подключаются глобальные стили
import {ReactElement, ReactNode, useState} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {HydrationBoundary, QueryClient, QueryClientProvider} from '@tanstack/react-query'
//подключение layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
