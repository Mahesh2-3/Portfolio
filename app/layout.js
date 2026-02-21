import { Lilita_One, Alumni_Sans_Pinstripe, Ubuntu } from "next/font/google";
import "./globals.css";
import Image from "next/image";

// Shortened names
const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: "400",
});

const alumni = Alumni_Sans_Pinstripe({
  variable: "--font-alumni",
  subsets: ["latin"],
  weight: "400", // must specify for this font
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"], // can use multiple weights
});

export const metadata = {
  title: "Mahesh Portfolio",
  description: "A Full Stack web developer",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${lilita.variable} ${alumni.variable} ${ubuntu.variable} antialiased`}
      >
        {children}
        <Image
          width={56}
          height={56}
          priority
          title="Mahesh Babu"
          src="/logo.webp"
          alt="logo"
          className="w-14 h-auto rounded-full fixed cursor-pointer top-6 right-6"
        />
      </body>
    </html>
  );
}
