import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalProvider } from "./GlobalContext.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahesh Babu K",
  description: "This is my Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg" href="/logo.svg" />
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased font-sans relative`}
      >
        <GlobalProvider>
        <Navbar />
        {children}
        <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
