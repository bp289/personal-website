"use client";

import "./globals.css";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { clsx } from "clsx";

import { SkillsCarousel } from "@/components/SkillsCarousel";
import { Typography, Tooltip, useTheme } from "@material-tailwind/react";

const linkedin = "https://www.linkedin.com/in/biraj-pantha/";
const github = "https://github.com/bp289";
export default function Home({ darkMode }) {
  const { name } = useTheme();
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
          <div className="flex gap-6 flex-col  md:items-start justify-center">
            <Typography variant="h1" className=" text-5xl md:text-9xl  ml-8">
              Biraj Pantha
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xl font-light ml-8 mr-5 mb-20"
            >
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
              Ive also got an array of other skills to complement too! As of
              nowz I have just over a year of commercial Experience in the
              field.
            </Typography>
          </div>
          <SkillsCarousel />
        </div>
        <div className="flex justify-start items-center gap-4 mx-8 mt-20 md:mt-2 p-3 bg-indigo-100 rounded-full">
          <Tooltip
            content={"my linkedIn profile"}
            className={clsx("shadow-md", {
              "bg-[#171717] text-white": name === "light",
              "bg-blue-gray-100 text-black": name === "dark",
            })}
            placement="top"
          >
            <SocialIcon url={linkedin} href={linkedin} />
          </Tooltip>
          <Tooltip
            content={"my github profile"}
            className={clsx("shadow-md", {
              "bg-[#171717] text-white": name === "light",
              "bg-blue-gray-100 text-black": name === "dark",
            })}
            placement="top"
          >
            <SocialIcon url={github} href={linkedin} />
          </Tooltip>
        </div>
      </div>
    </main>
  );
}
