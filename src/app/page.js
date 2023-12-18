"use client";

import "./globals.css";
import Image from "next/image";

import { SkillsCarousel } from "@/components/SkillsCarousel";
import { Typography } from "@material-tailwind/react";
export default function Home({ darkMode }) {
  return (
    <main className="h-full lg:max-h-[500px] mt-[2rem] max-w-screen-2xl text-white mx-auto">
      <Image
        className="rounded-full mx-auto mb-[4rem]"
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
            <Typography variant="paragraph" className="text-2xl font-light">
              <mark className="text-inherit font-bold bg-transparent block mb-2">
                Hello & welcome to my website!
              </mark>{" "}
              Im Biraj, a Software engineer based in the UK. If you could
              describe me with 1 word it would be{" "}
              <mark className="text-inherit font-bold bg-transparent">
                {"Inquisitive"},
              </mark>{" "}
              I love learning new technologies and seeing how I can apply them.
              Im adept with all things JavaScript, TypeScript and Node.js but
              Ive also got an array of other skills to complement too! As of now
              I have just over a year of commercial Experience in the field.
            </Typography>
          </div>
          <SkillsCarousel />
        </div>
      </div>
    </main>
  );
}
