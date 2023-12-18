"use client";

import "../globals.css";

import { Typography } from "@material-tailwind/react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects({ darkMode }) {
  return (
    <main className="h-full max-h-[500px] mt-[7rem] max-w-screen-2xl text-white mx-auto">
      <div className="flex h-full flex-col items-start">
        <Typography variant="h1" className="text-7xl">
          Projects
        </Typography>
        <div>
          <ProjectCard
            title="Elden Ring wiki app"
            skills={["TypeScript", "Node", "React"]}>
            A sleek mobile wiki for the game Elden Ring.Data gathered from a
            public API. All information is neatly categorized, making it easy to
            browse. and also a search feature to assist in finding what
            {" you're "}
            looking for. If you find things you want to go back to, the
            bookmarks feature comes in very handy.
          </ProjectCard>
        </div>
      </div>
    </main>
  );
}
