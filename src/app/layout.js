"use client";
import { Inter } from "next/font/google";
import Navbar from "../components/NavBar";
import "./globals.css";

import { button, ThemeProvider } from "@material-tailwind/react";
const inter = Inter({ subsets: ["latin"] });

const theme = {
  button: {
    defaultProps: {
      variant: "outlined",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll"
      lang="en"
    >
      <body className={inter.className}>
        <ThemeProvider value={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
