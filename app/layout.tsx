import type { Metadata } from 'next'
import { Geist, Geist_Mono, Bebas_Neue, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas" });
const _dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: 'Jai Jansi Industries - Premium Manufacturing Solutions',
  description: 'Leading manufacturer of high-quality industrial products and solutions',
  generator: 'v0.app',
  openGraph: {
    title: 'Jai Jansi Industries - Premium Manufacturing Solutions',
    description: 'Leading manufacturer of high-quality industrial products and solutions',
    images: [
      {
        url: '/jai.jpg',
        width: 1200,
        height: 630,
        alt: 'Jai Jansi Industries Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jai Jansi Industries - Premium Manufacturing Solutions',
    description: 'Leading manufacturer of high-quality industrial products and solutions',
    images: ['/jai.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_bebasNeue.variable} ${_dmSans.variable}`}>
      <body className="font-sans antialiased dark">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
