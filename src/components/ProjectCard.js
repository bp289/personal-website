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
import { SocialIcon } from "react-social-icons";
const github = "https://github.com/bp289";

export function ProjectCard({
  title,
  skills,
  children,
  images,
  imageHeight,
  imageWidth,
  chevronColor,
  githubUrl,
}) {
  const { name } = useTheme();

  return (
    <div>
      <Card
        className={clsx("w-[24rem] shadow-md overflow-hidden", {
          "bg-indigo-100": name === "light",
          "bg-[#24292e]": name === "dark",
        })}
      >
        <CardHeader className="m-0 bg-transparent rounded-none shadow-none ">
          <Tooltip
            content={"View this project on github"}
            className={clsx("shadow-md", {
              "bg-[#171717] text-white": name === "light",
              "bg-blue-gray-100 text-black": name === "dark",
            })}
            placement="top"
          >
            <SocialIcon
              className="absolute z-10 left-4 top-5 rounded-full"
              url={github}
              href={githubUrl}
            />
          </Tooltip>
          <GenericCarousel
            images={images}
            chevronColor={chevronColor}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
          />
        </CardHeader>
        <div className="h-full flex-col justify-between">
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
    </div>
  );
}
