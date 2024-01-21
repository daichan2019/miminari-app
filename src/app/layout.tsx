import { notoSansJp } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

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
    <html lang='ja'>
      <body className={notoSansJp.className}>{children}</body>
    </html>
  )
}
