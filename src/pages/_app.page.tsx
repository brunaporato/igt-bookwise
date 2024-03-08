import { globalStyles } from '@/styles/global'
import { AppProps } from 'next/app'
// eslint-disable-next-line camelcase
import { Nunito_Sans } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

export const nunito = Nunito_Sans({
  subsets: ['latin'],
})

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${nunito.className}`}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </QueryClientProvider>
  )
}
