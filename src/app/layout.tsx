import Header from '@/components/header'
import { notoSansJp } from '@/lib/fonts'
import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miminari App',
  description: 'Miminari App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='ja'>
        <body className={notoSansJp.className}>
          <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='flex-grow'>
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
