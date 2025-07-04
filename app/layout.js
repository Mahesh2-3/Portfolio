// app/layout.js or app/root-layout.js
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mahesh | Full Stack Developer",
  description: "A Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/logo.png" type="image/png" />
    </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
