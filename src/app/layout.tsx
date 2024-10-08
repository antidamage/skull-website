import type { Metadata } from "next";

import Image from 'next/image';
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
        <div className="flex landscape:grow landscape:items-center landscape:mt-spacetop">

          <div className="flex portrait:inline">
            <header className="pt-10">

              <div className="flex grow landscape:items-center">
                <object data="/i/logo05.svg" type="image/svg+xml" className="size-4/10" />
              </div>

              <Menu />

              <Image
                src="/i/skull-slow.gif"
                alt=""
                width={400}
                height={400}
                className="ml-auto mr-auto"
              />

            </header>

            <main className="flex 1 items-top mt-100">
              {children}
            </main>
          </div>

        </div >

      </body >
    </html >
  );
}