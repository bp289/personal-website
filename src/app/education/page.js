"use client";

import "../globals.css";
import Head from "next/head";
import { linkedin, github } from "@/utils/links";
import Link from "next/link";

import { Typography } from "@material-tailwind/react";
export default function Education({ darkMode }) {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <main className="h-full max-h-[500px] mt-[10rem] max-w-screen-2xl text-white mx-auto">
        <div className="flex h-full flex-col items-start">
          <Typography>
            The Education is still under construction, please visit my{" "}
            <Link className="font-bold" href={linkedin}>
              linkedin
            </Link>{" "}
            for more information
          </Typography>
        </div>
      </main>
    </>
  );
}
