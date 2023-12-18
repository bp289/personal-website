"use client";

import "../globals.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects({ darkMode }) {
  return (
    <main className="h-full max-h-[500px] mt-[7rem] max-w-screen-2xl text-white mx-auto">
      <div className="flex h-full flex-col items-start">
        <Typography variant="h1" className="text-7xl">
          Projects
        </Typography>
        <div>
          <ProjectCard />
        </div>
      </div>
    </main>
  );
}
