import './globals.css';
import { Inter } from 'next/font/google';
import { Cormorant_Garamond, Ephesis } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant',
});
const ephesis = Ephesis({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ephesis',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${ephesis.variable}`}>
      <body className="font-cormorant">{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Photography Portfolio',
  description: 'A beautiful photography portfolio website',
};

