"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html
      className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll"
      lang="en"
    >
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
