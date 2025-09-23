import { Orbitron, Audiowide, Rajdhani } from "next/font/google";
import "./globals.css";
import "../styles/xlr8-theme.css";
import { metadata } from "./metadata";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${orbitron.variable} ${audiowide.variable} ${rajdhani.variable} antialiased font-orbitron`}
      >
        {children}
      </body>
    </html>
  );
}
