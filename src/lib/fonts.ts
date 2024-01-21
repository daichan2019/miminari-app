import { Noto_Sans_JP } from 'next/font/google'

// 使用したいフォントの設定
export const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})
