import { globalStyles } from '@/styles/global'
import { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

export const nunito = Nunito({
  subsets: ['latin'],
})

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  globalStyles()

  return (
    <div className={`${nunito.className}`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}
