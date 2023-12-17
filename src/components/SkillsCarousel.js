"use client";
import { Carousel, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export function SkillsCarousel() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
      navigation={() => <></>}
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <Button
          variant="text"
          size="lg"
          ripple={false}
          onClick={handlePrev}
          className="!absolute top-2/4 left-1 -translate-y-2/4  hover:bg-transparent active:bg-transparent"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
      )}
      nextArrow={({ handleNext }) => (
        <Button
          variant="text"
          size="lg"
          ripple={false}
          onClick={handleNext}
          className="!absolute top-2/4 !right-1 -translate-y-2/4 hover:bg-transparent active:bg-transparent "
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      )}
    >
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        alt="React"
        width="500"
        height="500"
        className=" h-full w-[60%] mx-auto"
      />
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        alt="Next.js"
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        alt="sass"
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
        alt="TypeScript"
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="html"
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        alt="JavaScript"
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />

      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
        alt=""
        width="500"
        height="500"
        className="h-full w-[60%] mx-auto"
      />
    </Carousel>
  );
}
