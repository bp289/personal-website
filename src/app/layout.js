"use client";
import Navbar from "../components/NavBar";
import "./globals.css";

import { ThemeProvider } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "@/utils/themes";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const handleTheme = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  const backGround = darkMode ? "bg-gray-900" : "bg-blue-gray-50";

  useEffect(() => {
    const darkModeInStorage = localStorage.getItem("darkMode");
    if (darkModeInStorage) {
      setDarkMode(darkModeInStorage === "true" ? true : false);
    }
  }, []);

  return (
    <html
      className="max-h-[1000px] h-full w-[calc(100%+48px)] overflow-scroll"
      lang="en"
    >
      <body className={`${backGround} h-full w-full`}>
        <ThemeProvider value={darkMode ? darkTheme : lightTheme}>
          <Navbar darkMode={darkMode} onToggleTheme={handleTheme} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

const theme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          initial: {
            display: "block",
            width: "w-full",
            maxWidth: "max-w-screen-2xl",
            borderRadius: "rounded-xl",
            py: "py-4",
            px: "px-8",
          },
        },
        mobileNav: {
          display: "block",
          width: "w-full",
          basis: "basis-full",
          overflow: "overflow-hidden",
        },
      },
    },
  },
};
