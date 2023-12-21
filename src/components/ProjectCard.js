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

import { useTheme } from "@material-tailwind/react";
import { GenericCarousel } from "./GenericCarousel";
import { ProjectAccordion } from "./ProjectAccordion";

export function ProjectCard({
  title,
  skills,
  children,
  images,
  imageHeight,
  imageWidth,
  imageClassName,
  chevronColor,
}) {
  const { name } = useTheme();

  return (
    <Card
      className={clsx("w-[24rem] shadow-md overflow-hidden h-[30rem] ", {
        "bg-indigo-100": name === "light",
        "bg-[#171717]": name === "dark",
      })}
    >
      <CardHeader className="m-0 bg-transparent h-[40rem] rounded-none shadow-none ">
        <GenericCarousel
          images={images}
          chevronColor={chevronColor}
          imageClass={imageClassName}
          imageHeight={imageHeight}
          imageWidth={imageWidth}
        />
      </CardHeader>
      <div className="flex h-full flex-col justify-between">
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
              placement="bottom"
            >
              <Avatar alt={skill} variant="square" src={skillsLinks[skill]} />
            </Tooltip>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
}
