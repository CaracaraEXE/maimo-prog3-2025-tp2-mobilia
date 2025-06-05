import { Geist, Geist_Mono, Amarante, Oregano } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const amarante = Amarante({
  variable: "--font-amarante",
  subsets: ["latin"],
  weight: "400",
})

const oregano = Oregano({
  variable:"--font-oregano",
  subsets:["latin"],
  weight:"400",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TP2 - MOVIES",
  description: "With love from Maimo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amarante.variable} ${oregano.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
