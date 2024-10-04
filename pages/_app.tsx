import "@/styles/globals.css";
import {ReactElement, ReactNode, useState} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {HydrationBoundary, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useLoader} from "@/assets/common/hooks/useLodaer";
import '../styles/nprogress.css'

//подключение layout
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())
  useLoader()
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

