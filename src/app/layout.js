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

  const backGround = darkMode ? "bg-gray-900" : "bg-indigo-50";

  const text = darkMode ? "text-orange-900" : "text-gray-900";

  useEffect(() => {
    const darkModeInStorage = localStorage.getItem("darkMode");
    if (darkModeInStorage) {
      setDarkMode(darkModeInStorage === "true" ? true : false);
    }
  }, []);

  return (
    <html className="h-full overflow-scroll" lang="en">
      <body className={`${backGround} h-full w-full [&>*]:${text} `}>
        <ThemeProvider value={darkMode ? darkTheme : lightTheme}>
          <Navbar
            darkMode={darkMode}
            backGround={backGround}
            onToggleTheme={handleTheme}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
