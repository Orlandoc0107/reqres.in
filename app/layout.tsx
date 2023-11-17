import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { inter } from '@/app/ui/fonts';
import SessionProvider from '@/app/lib/SessionAuthProvider'
import Header from './ui/components/header';
import Foother from './ui/components/foother';

export const metadata: Metadata = {
  title: 'reqres.in',
  description: 'reqres.in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
        </head>
        <body className={`${inter.className} antialiased bg-color5 text-color3`}>
          <div>
            <Header />
            {children}
          </div>
          <div>
            <Foother />
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}
