import type { Metadata } from "next";
import Link from 'next/link';
import Menu from './components/menu';

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
        <div className="flex flex-grow h-full">

          <header className="pt-10">

            <div className="flex items-center mx-auto">
              <object data="/i/logo.svg" type="image/svg+xml" className="size-4/12">
                <img src="/i/logo.png" />
              </object>
            </div>

            <Menu />

          </header>

          <main className="flex-grow">
            {children}
          </main>

        </div >

      </body >
    </html >
  );
}