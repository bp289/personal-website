"use client";
import "../globals.css";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

import { linkedin, github } from "@/utils/links";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
export default function Experience({ darkMode }) {
  return (
    <>
      <main className="h-full max-h-[500px] mt-[2rem] max-w-screen-2xl text-white md:mx-auto">
        <div className="flex h-full flex-col items-center marker lg:items-start md:ml-10 lg+:mx-0">
          <Typography variant="h1" className="text-7xl ">
            Experience
          </Typography>
          <div className="mt-16">
            <ExperienceTimeline />
          </div>
        </div>
      </main>
    </>
  );
}
