import {
  Typography,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { clsx } from "clsx";
import { useState } from "react";

export function ProjectAccordion({ title, themeName, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Accordion open={open}>
      <AccordionHeader
        className={clsx({
          "border-b-white": themeName === "dark",
          "border-b-gray-900 ": themeName === "light",
        })}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Typography variant="h6" className="w-full">
          {title}
        </Typography>
        <ChevronDownIcon
          className={clsx("h-6 w-6 transition duration-0", {
            "rotate-180": open,
            "text-white": themeName === "dark",
            "text-black": themeName === "light",
          })}
        />
      </AccordionHeader>
      <AccordionBody className="w-[100%] flex flex-row">
        <Typography variant="paragraph">{children}</Typography>
      </AccordionBody>
    </Accordion>
  );
}
