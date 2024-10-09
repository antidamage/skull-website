import type { Metadata } from "next";

import Menu from './components/Menu';

import { Inter } from "next/font/google";
import { Protest_Guerrilla } from 'next/font/google';
import { Sedgwick_Ave } from 'next/font/google';
import { Rock_Salt } from 'next/font/google';
import { Poppins } from 'next/font/google';

import "./globals.css";

export const metadata: Metadata = {
  title: "Skull",
  description: "Placeholder page for Skull",
};

const inter = Inter({ subsets: ["latin"] });
const protestguerrilla = Protest_Guerrilla({ subsets: ['latin'], weight: ["400"], variable: '--font-protestguerrilla' });
const sedgwickave = Sedgwick_Ave({ subsets: ['latin'], weight: ["400"], variable: '--font-sedgwickave' });
const rocksalt = Rock_Salt({ subsets: ['latin'], weight: ["400"], variable: '--font-rocksalt' });
const poppins = Poppins({ subsets: ['latin'], weight: ["400"], variable: '--font-poppins' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" landscape:grow landscape:items-center landscape:mt-spacetop">

          <header className="pt-10 flex-1 w-screen">
            <object data="/i/logo05.svg" type="image/svg+xml" className="object-contain landscape:w-6/12 max-w-screen-lg">
              <img src="/i/logo05.png" className="object-contain landscape:w-6/12 max-w-screen-lg" />
            </object>
            <Menu />
          </header>

          <main className="items-top inline-flex max-w-screen-2xl">
            {children}
          </main>

        </div >

      </body >
    </html >
  );
}