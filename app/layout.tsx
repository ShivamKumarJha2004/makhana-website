import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAAKHANA - Ghar Ka Khana, Delivered on Your Schedule',
  description:
    'Healthy, home-cooked, affordable meals for next-gen hustlers, hostel students, working professionals, and gym enthusiasts in Noida & Greater Noida. Zero hassle. Scheduled drops that fit your clock.',
  keywords:
    'home cooked meals, healthy food delivery, noida food, greater noida meals, gym meals, protein food, affordable meals, pg food',
  authors: [{ name: 'MAAKHANA' }],

  
 
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },

  openGraph: {
    title: 'MAAKHANA - Ghar Ka Khana Delivered',
    description: 'Healthy, home-cooked, affordable meals delivered on your schedule',
    type: 'website',
    locale: 'en_IN',
    images: ['/icon.png'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MAAKHANA - Ghar Ka Khana Delivered',
    description: 'Healthy, home-cooked, affordable meals delivered on your schedule',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
