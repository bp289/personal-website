import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { skillsLinks } from "@/utils/skillIcons";
import { clsx } from "clsx";
import Image from "next/image";

import { useTheme } from "@material-tailwind/react";
import { GenericCarousel } from "./ProjectsCarousel";
import { ProjectAccordion } from "./ProjectAccordion";

export function ProjectCard({ title, skills, children }) {
  const { name } = useTheme();

  return (
    <Card
      className={clsx("w-[24rem] overflow-hidden shadow-md", {
        "bg-blue-gray-100": name === "light",
        "bg-[#171717]": name === "dark",
      })}>
      <CardHeader
        color=""
        className="m-0 bg-transparent rounded-none shadow-none ">
        <GenericCarousel />
      </CardHeader>
      <CardBody className="bg-transparent">
        <ProjectAccordion title={title} skills={skills} themeName={name}>
          {children}
        </ProjectAccordion>
      </CardBody>
      <CardFooter className="flex items-center gap-2 justify-start">
        {skills?.map((skill) => (
          <Tooltip
            key={skill}
            content={skill}
            className={clsx("shadow-md", {
              "bg-[#171717] text-white": name === "light",
              "bg-blue-gray-100 text-black": name === "dark",
            })}
            placement="bottom">
            <Avatar alt={skill} variant="square" src={skillsLinks[skill]} />
          </Tooltip>
        ))}
      </CardFooter>
    </Card>
  );
}
