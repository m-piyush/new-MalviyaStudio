import './globals.css';
import { Inter } from 'next/font/google';
import { Cormorant_Garamond, Ephesis } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

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
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${ephesis.variable}`}
      suppressHydrationWarning
    >
      <body className="font-cormorant">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


