"use client";
import React from "react";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

export default function NavBar({ onToggleTheme, darkMode }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="navlist">
      <Button as="li" variant="text" className="p-3 font-normal h-full ">
        <Link href="#" className="flex items-center">
          Skills
        </Link>
      </Button>
      <Button as="li" variant="text">
        <Link href="#" className="flex items-center">
          Projects
        </Link>
      </Button>
      <Button as="li" variant="text">
        <Link href="#" className="flex items-center">
          Experience
        </Link>
      </Button>
      <Button as="li" variant="text">
        <Link href="#" className="flex items-center">
          Education
        </Link>
      </Button>
    </ul>
  );

  return (
    <Navbar
      className={`sticky top-0 z-10 h-max border-b-4 ${
        darkMode ? "border-blue-gray-50" : "border-gray-800"
      } rounded-none w-full max-w-[100%] text-white`}
    >
      <div className=" max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium ">
            <Link href="/">Biraj Pantha</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button className="p-2" onClick={onToggleTheme} variant="text">
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </Button>
            <IconButton
              className="p-2 lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </div>
    </Navbar>
  );
}
