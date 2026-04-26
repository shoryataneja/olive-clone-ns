import './globals.css';

export const metadata = {
  metadataBase: new URL('https://oliveapp.com'),
  title: 'Olive — The Safest Way to Shop for Groceries',
  description: 'Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family\'s Diet.',
  openGraph: {
    title: 'Olive — The Safest Way to Shop for Groceries',
    description: 'Instantly Eliminate Harmful Ingredients from Your Family\'s Diet with the Olive Food Scanner App.',
    url: 'https://oliveapp.com',
    siteName: 'Olive',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Olive App',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olive — The Safest Way to Shop for Groceries',
    description: 'Instantly Eliminate Harmful Ingredients from Your Family\'s Diet.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
