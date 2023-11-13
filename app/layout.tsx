import type { Metadata } from 'next'
import { Playfair_Display, Roboto } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import { Suspense } from 'react'
import Loading from './loading'

const playfair = Playfair_Display({ subsets: ["latin"] })
const roboto = Roboto({ weight: "300", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Narnia Ticketer',
  description: 'Study Next JS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${roboto.className}`}>
        <></>
        <Nav />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
