"use client";

import "../globals.css";
import Image from "next/image";

import { Typography } from "@material-tailwind/react";
export default function Skills({ darkMode }) {
  return (
    <main className="h-full max-h-[500px] mt-[10rem] max-w-screen-2xl text-white mx-auto">
      <div className="flex h-full flex-col items-start">
        <Typography>skills</Typography>
      </div>
    </main>
  );
}
