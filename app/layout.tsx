import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akdemir Maçonnerie',
  description: 'Akdemir Maçonnerie : Maçonnerie professionnelle à Annecy et alentours. Construction, rénovation, réparation, démolition. Qualité, confiance et expertise.',
  generator: 'v0.dev',
  keywords: [
    'maçonnerie',
    'Annecy',
    'construction',
    'rénovation',
    'réparation',
    'démolition',
    'bâtiment',
    'artisan',
    'Akdemir Maçonnerie'
  ],
  authors: [{ name: 'Akdemir Maçonnerie', url: 'https://akdemir-maconnerie.com' }],
  openGraph: {
    title: 'Akdemir Maçonnerie',
    description: 'Akdemir Maçonnerie : Maçonnerie professionnelle à Annecy et alentours. Construction, rénovation, réparation, démolition. Qualité, confiance et expertise.',
    url: 'https://akdemir-maconnerie.com',
    siteName: 'Akdemir Maçonnerie',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Logo Akdemir Maçonnerie',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akdemir Maçonnerie',
    description: 'Akdemir Maçonnerie : Maçonnerie professionnelle à Annecy et alentours. Construction, rénovation, réparation, démolition. Qualité, confiance et expertise.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="canonical" href="https://akdemir-maconnerie.com/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Akdemir Maçonnerie" />
        <meta name="keywords" content="maçonnerie, Annecy, construction, rénovation, réparation, démolition, bâtiment, artisan, Akdemir Maçonnerie" />
        <meta property="og:title" content="Akdemir Maçonnerie" />
        <meta property="og:description" content="Akdemir Maçonnerie : Maçonnerie professionnelle à Annecy et alentours. Construction, rénovation, réparation, démolition. Qualité, confiance et expertise." />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akdemir-maconnerie.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akdemir Maçonnerie" />
        <meta name="twitter:description" content="Akdemir Maçonnerie : Maçonnerie professionnelle à Annecy et alentours. Construction, rénovation, réparation, démolition. Qualité, confiance et expertise." />
        <meta name="twitter:image" content="/icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Akdemir Maçonnerie",
          "image": "https://akdemir-maconnerie.com/icon.png",
          "@id": "https://akdemir-maconnerie.com/",
          "url": "https://akdemir-maconnerie.com/",
          "telephone": "+33 6 70 59 15 46",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Annecy",
            "addressCountry": "FR"
          },
          "description": "Akdemir Maçonnerie : Maçonnerie professionnelle à Annecy et alentours. Construction, rénovation, réparation, démolition. Qualité, confiance et expertise.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33 6 70 59 15 46",
            "contactType": "customer service",
            "areaServed": "FR"
          }
        }` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
