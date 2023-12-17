"use client";

import "./globals.css";
import Image from "next/image";

import { SkillsCarousel } from "@/components/SkillsCarousel";
import { Typography } from "@material-tailwind/react";
export default function Home({ darkMode }) {
  return (
    <main className="h-full max-h-[500px] mt-[10rem] max-w-screen-2xl text-white mx-auto">
      <Image
        className="rounded-full mx-auto mt-[8em] my-[5rem]"
        src="/Profile.jpg"
        alt="profile"
        width="300"
        height="300"
      />

      <div className="flex h-full flex-col items-start">
        <div className="flex flex-col lg:flex-row">
          <div className="flex gap-6 flex-col items-start justify-center">
            <Typography variant="h1" className="text-9xl">
              Biraj Pantha
            </Typography>
            <Typography variant="paragraph" className="text-4xl font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, rerum. Debitis accusantium deleniti enim iste
              dignissimos? Similique, exercitationem! Odit vero, numquam quae
              ratione maxime sunt reiciendis laudantium quaerat iure ipsum!
            </Typography>
          </div>
          <SkillsCarousel />
        </div>
      </div>
    </main>
  );
}
