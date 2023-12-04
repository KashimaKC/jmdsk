import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Titlebar from './components/titlebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'jmdsk',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Titlebar />
      <body className={inter.className} style={{margin: 0}}>{children}</body>
    </html>
  )
}
