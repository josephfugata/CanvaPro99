import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: 'CanvaPro99 Landing - Lifetime Canva Pro sa halagang ₱99 lang!',
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
  ],
  openGraph: {
    title: 'Lifetime Canva Pro sa halagang ₱99 lang! | CanvaPro99',
    description: 'I-unlock ang lahat ng premium features at assets ng Canva Pro sa isang-beses na bayad. Walang monthly fees!',
    url: 'https://canvapro99.com', // Replace with your actual domain
    siteName: 'CanvaPro99',
    images: [
      {
        url: 'https://canvapro99.com/start-designing.avif', // Replace with your actual domain
        width: 1200,
        height: 630,
        alt: 'Creative collage representing Canva Pro features',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifetime Canva Pro sa halagang ₱99 lang! | CanvaPro99',
    description: 'Habang-buhay na access sa Canva Pro sa isang-beses na bayad na ₱99 lang. I-unlock ang lahat ng premium features at assets para sa iyong creativity.',
    images: ['https://canvapro99.com/start-designing.avif'], // Replace with your actual domain
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
        {/* Meta Pixel Code */}
        <script>
          {!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1366619151535555');
          fbq('track', 'PageView');}
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1366619151535555&ev=PageView&noscript=1"
        /></noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
