import Header from '@/components/heder'
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
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
