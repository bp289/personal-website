import {
  Typography,
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { clsx } from "clsx";
import { useState } from "react";

export function ProjectAccordion({ title, themeName, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Accordion open={open}>
      <AccordionHeader
        className={clsx({
          "border-b-white": themeName === "dark",
          "border-b-gray-900": themeName === "light",
        })}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Typography
          variant="h6"
          className="w-full flex flex-row justify-between"
        >
          {title}
          <ChevronUpIcon
            className={clsx("h-6 w-6 transition ", {
              "rotate-180": open,
            })}
          />
        </Typography>
      </AccordionHeader>
      <AccordionBody className="w-[100%] flex flex-row">
        <Typography variant="paragraph">{children}</Typography>
      </AccordionBody>
    </Accordion>
  );
}
