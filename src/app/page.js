"use client";

import "./globals.css";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { clsx } from "clsx";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { Typography, Tooltip, useTheme } from "@material-tailwind/react";
import {
  TransitionDown,
  TransitionUp,
  TransitionSide,
} from "@/components/Experience/Transitions/transitions";
import { linkedin, github } from "../utils/links";

export default function Home({ darkMode }) {
  const { name } = useTheme();
  return (
    <>
      <main className="h-full lg:max-h-[500px] mt-[2rem] max-w-screen-2xl text-white mx-auto">
        <TransitionDown delay={0.1}>
          <Image
            className="rounded-full mx-auto mb-[4rem]"
            src="/Profile.jpg"
            alt="profile"
            width="300"
            height="300"
          />
        </TransitionDown>

        <div className="flex h-full flex-col items-start">
          <div className="flex flex-col lg:flex-row">
            <div className="flex gap-6 flex-col  md:items-start justify-center">
              <TransitionSide delay={0.3}>
                <Typography
                  variant="h1"
                  aria-label="mark"
                  className=" text-5xl md:text-9xl  ml-8 slide-transition">
                  Biraj Pantha
                </Typography>
              </TransitionSide>
              <TransitionSide delay={0.5}>
                <Typography
                  variant="paragraph"
                  className="text-xl font-light ml-8 mr-5 mb-20">
                  <span className="font-bold text-xl bg-transparent block mb-2">
                    Hello & welcome to my website!
                  </span>
                  Im Biraj, a Software engineer based in the UK. If you could
                  describe me with one word it would be{" "}
                  <span className="text-xl inline font-bold bg-transparent">
                    {'"Inquisitive"'}.
                  </span>{" "}
                  I love learning new technologies and seeing how I can apply
                  them. Im adept with all things JavaScript, TypeScript and
                  Node.js but Ive also got an array of other skills to
                  complement too! As of now I have just over a year of
                  commercial Experience in the field.
                </Typography>
              </TransitionSide>
            </div>

            <TransitionUp delay={0.5} className="w-full">
              <SkillsCarousel />
            </TransitionUp>
          </div>

          <TransitionUp delay={0.6}>
            <div
              className={clsx(
                "flex justify-start items-center gap-4 mx-8 mt-20 md:mt-2 p-3 rounded-full",
                {
                  "bg-indigo-100": name === "dark",
                  "bg-gray-400": name === "light",
                }
              )}>
              <Tooltip
                content={"my linkedIn profile"}
                className={clsx("shadow-md", {
                  "bg-[#171717] text-white": name === "light",
                  "bg-blue-gray-100 text-black": name === "dark",
                })}
                placement="top">
                <SocialIcon url={linkedin} href={linkedin} />
              </Tooltip>
              <Tooltip
                content={"my github profile"}
                className={clsx("shadow-md", {
                  "bg-[#171717] text-white": name === "light",
                  "bg-blue-gray-100 text-black": name === "dark",
                })}
                placement="top">
                <SocialIcon url={github} href={github} />
              </Tooltip>
            </div>
          </TransitionUp>
        </div>
      </main>
    </>
  );
}
