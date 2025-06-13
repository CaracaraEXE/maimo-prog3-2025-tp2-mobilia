import { Limelight, Amarante, Oregano, IM_Fell_French_Canon } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppContextProvider } from "@/contexts/AppContext";

const french_canon = IM_Fell_French_Canon({
  variable:"--font-frenchcanon",
  subsets:["latin"],
  weight:"400",
})

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

const lime_light = Limelight({
  variable: "--font-limelight",
  subsets:["latin"],
  weight:"400",
})


export const metadata = {
  title: "TP2 - MOVIES",
  description: "With love from Maimo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lime_light.variable} ${amarante.variable} ${oregano.variable} ${french_canon.variable} antialiased`}
      >
        <AppContextProvider>
          <Header/>
            {children}
          <Footer/>
        </AppContextProvider>
      </body>
    </html>
  );
}
