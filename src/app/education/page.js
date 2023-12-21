"use client";

import "../globals.css";
import Head from "next/head";

import { Typography } from "@material-tailwind/react";
export default function Education({ darkMode }) {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <main className="h-full max-h-[500px] mt-[10rem] max-w-screen-2xl text-white mx-auto">
        <div className="flex h-full flex-col items-start">
          <Typography>Education (not finished yet) </Typography>
        </div>
      </main>
    </>
  );
}
