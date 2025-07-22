import { Inter, Playfair_Display, Poppins } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: false, // Only preload critical fonts
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
  preload: false,
});

export const fontVariables = `${inter.variable} ${poppins.variable} ${playfairDisplay.variable}`;
export const bodyFontClass = inter.className;
