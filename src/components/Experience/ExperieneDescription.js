import { Typography } from "@material-tailwind/react";
import React from "react";

const ExperienceDescription = ({ title, children }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <div className="ml-4 mt-2">
        <ul className="list-disc">{children}</ul>
      </div>
    </>
  );
};

export default ExperienceDescription;
