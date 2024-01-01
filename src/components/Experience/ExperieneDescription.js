import { Typography } from "@material-tailwind/react";
import React from "react";
import { clsx } from "clsx";
import { useTheme } from "@material-tailwind/react";

const ExperienceDescription = ({ title, children }) => {
  const { name } = useTheme();
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <div className="ml-4 mt-2">
        <ul
          className={clsx("list-disc", {
            "[&>*]:text-black": name === "light",
            "[&>*]:text-white": name === "dark",
          })}>
          {children}
        </ul>
      </div>
    </>
  );
};

export default ExperienceDescription;
