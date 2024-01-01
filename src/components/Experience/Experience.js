import React from "react";

import Image from "next/image";

const favIconGetter =
  "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=";

const urlLink = (domain) => `${favIconGetter}${domain}/&size=50`;

import {
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
const Experience = ({
  title,
  company,
  url,
  children,
  dates,
  endOfTimeline,
}) => {
  return (
    <>
      <TimelineItem>
        {!endOfTimeline ? <TimelineConnector /> : null}
        <TimelineHeader>
          <TimelineIcon className="p-0">
            <Image
              className="bg-white object-cover p-2"
              src={urlLink(url)}
              alt={company}
              width="50"
              height="50"
            />
          </TimelineIcon>

          <Typography variant="h5">
            {company} - {title}{" "}
            <span className="font-light italic">({dates})</span>
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">{children}</TimelineBody>
      </TimelineItem>
    </>
  );
};

export default Experience;
