import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from 'react';
import { MetaPixel } from '@/components/analytics/MetaPixel';


export const metadata: Metadata = {
  metadataBase: new URL('https://canvapro99.com'),
  title: 'CanvaPro99 - Lifetime Canva Pro sa halagang ₱99 lang!',
  description: 'Habang-buhay na access sa Canva Pro sa isang-beses na bayad na ₱99 lang. I-unlock ang lahat ng premium features at assets para sa iyong creativity. Mag-avail na!',
  keywords: [
    'Canva Pro',
    'Canva Pro lifetime',
    'Canva Pro 99',
    'Canva Pro P99',
    'lifetime Canva Pro',
    'Canva Philippines',
    'murang Canva Pro',
    'Canva lifetime deal',
    'graphic design',
    'social media graphics',
    'video editing',
    'unlimited design',
    'Canva 99 pesos',
    'Canva sale',
    'graphic design tools Philippines',
  ],
  openGraph: {
    title: 'Lifetime Canva Pro sa halagang ₱99 lang! | CanvaPro99',
    description: 'I-unlock ang lahat ng premium features at assets ng Canva Pro sa isang-beses na bayad. Walang monthly fees!',
    url: 'https://canvapro99.com', // Replace with your actual domain
    siteName: 'CanvaPro99',
    images: [
      {
        url: '/start-designing.avif', // Assuming it's in the public folder
        width: 1200,
        height: 630,
        alt: 'Creative collage representing Canva Pro features',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifetime Canva Pro sa halagang ₱99 lang! | CanvaPro99',
    description: 'Habang-buhay na access sa Canva Pro sa isang-beses na bayad na ₱99 lang. I-unlock ang lahat ng premium features at assets para sa iyong creativity.',
    images: ['/start-designing.avif'], // Assuming it's in the public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="font-body antialiased">
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
