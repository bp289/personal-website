import React from "react";
import { clsx } from "clsx";
import { Typography, useTheme } from "@material-tailwind/react";
const Highlight = ({ children, className }) => {
  return (
    <Typography as="span" className={clsx("font-bold", className)}>
      {children}
    </Typography>
  );
};

export default Highlight;
