// SEO metadata for the XLR8 Gaming tournament website

export const metadata = {
  title: 'XLR8 Gaming | Professional Gaming Tournaments',
  description: 'Compete in high-stakes professional gaming tournaments with cash prizes. Join XLR8 Gaming for the ultimate competitive gaming experience.',
  keywords: 'gaming tournaments, esports competition, XLR8 Gaming, competitive gaming, gaming championships, professional gaming',
  openGraph: {
    title: 'XLR8 Gaming | Professional Gaming Tournaments',
    description: 'Compete in high-stakes professional gaming tournaments with cash prizes. Join XLR8 Gaming for the ultimate competitive gaming experience.',
    url: 'https://xlr8gaming.com',
    siteName: 'XLR8 Gaming',
    images: [
      {
        url: 'https://assassinarena.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'XLR8 Gaming Tournament',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XLR8 Gaming | Professional Gaming Tournaments',
    description: 'Compete in high-stakes professional gaming tournaments with cash prizes. Join XLR8 Gaming for the ultimate competitive gaming experience.',
    images: ['https://xlr8gaming.com/images/twitter-image.jpg'],
    creator: '@XLR8Gaming',
  },
  alternates: {
    canonical: 'https://xlr8gaming.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://xlr8gaming.com'),
};