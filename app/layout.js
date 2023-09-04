import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './provider';

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-graphik',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://dpinto.dev'),
  title: {
    default: 'Derian Pinto',
    template: '%s | Derian Pinto'
  },
  description: 'Developer and gamer.',
  openGraph: {
    title: 'Derian Pinto',
    description: 'Developer and gamer.',
    url: 'https://dpinto.dev',
    siteName: 'Derian Pinto',
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Derian Pinto',
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${graphik.variable}`} suppressHydrationWarning>
      <body className="text-black bg-white dark:text-white dark:bg-[#111010]">
        <Providers>
          <div className="px-8 max-w-[1100px] mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
