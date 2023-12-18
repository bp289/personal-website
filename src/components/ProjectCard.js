import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Chip,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { clsx } from "clsx";
import { useState } from "react";
import { SkillsCarousel } from "./SkillsCarousel";

import { useTheme } from "@material-tailwind/react";
import { GenericCarousel } from "./ProjectsCarousel";

export function ProjectCard({ title, skills, children }) {
  const [open, setOpen] = useState(false);

  const { name } = useTheme();

  console.log(name);
  return (
    <Card
      className={clsx("w-[24rem] overflow-hidden shadow-md", {
        "bg-blue-gray-100": name === "light",
        "bg-[#171717]": name === "dark",
      })}
    >
      <CardHeader
        color=""
        className="m-0 bg-transparent rounded-none shadow-none "
      >
        <GenericCarousel />
      </CardHeader>
      <CardBody className="bg-transparent">
        <Accordion open={open}>
          <AccordionHeader
            className={clsx({
              "border-b-white": name === "dark",
              "border-b-gray-900": name === "light",
            })}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Typography variant="h6" className="w-full flex flex-row">
              {title}
            </Typography>
          </AccordionHeader>
          <AccordionBody className="w-[100%] flex flex-row">
            <Typography variant="paragraph"></Typography>
          </AccordionBody>
        </Accordion>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          {skills?.map((skill) => (
            <Chip key={skill} value={skill} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
