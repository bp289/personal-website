"use client";

import "../globals.css";

import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components/ProjectCard";
const ssLink = "/Projects";

const EldenRing = Array(6)
  .fill("")
  .map((image, index) => {
    return `${ssLink}/EldenRing/ER${index + 1}.png`;
  });

const Ecomm = Array(6)
  .fill("")
  .map((image, index) => {
    return `${ssLink}/Ecomm/Ecomm${index + 1}.png`;
  });
import {
  TransitionDown,
  TransitionUp,
} from "@/components/Experience/Transitions/transitions";

export default function Projects({ darkMode }) {
  return (
    <>
      <main className="h-full max-h-[500px] mt-[2rem] max-w-screen-2xl text-white md:mx-auto">
        <div className="flex h-full flex-col items-center marker lg:items-start md:ml-10 lg+:mx-0">
          <TransitionDown delay={0.1}>
            <Typography variant="h1" className="text-7xl ">
              Projects
            </Typography>
          </TransitionDown>
          <div className="flex flex-wrap justify-center mt-20 gap-20">
            <TransitionUp delay={0.4}>
              <ProjectCard
                title="Elden Ring wiki app"
                skills={["TypeScript", "Node", "React"]}
                imageWidth="300"
                imageHeight="300"
                images={EldenRing}
                githubUrl={"https://github.com/bp289/EldenRingApp"}>
                A sleek mobile wiki for the game Elden Ring. Data gathered from
                a public API. All information is neatly categorized, making it
                easy to browse. and also a search feature to assist in finding
                what
                {" you're "}
                looking for. If you find things you want to go back to, the
                bookmarks feature comes in very handy.
              </ProjectCard>
            </TransitionUp>
            <TransitionUp delay={0.5}>
              <ProjectCard
                chevronColor="black"
                title="Ecommerce app"
                imageWidth="500"
                imageHeight="500"
                skills={["TypeScript", "Node", "Laravel", "Tailwind"]}
                images={Ecomm}
                githubUrl={"https://github.com/bp289/Ecommerce"}>
                <Typography variant="paragraph">(work in progress)</Typography>{" "}
                A recent project i was working on to get get experience with the
                laravel backend framework. Comes with features such as
                login/logout, search. Adding, deleting and updating listings.
              </ProjectCard>
            </TransitionUp>
          </div>
        </div>
      </main>
    </>
  );
}
