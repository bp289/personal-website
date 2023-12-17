"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
export function SkillsCarousel() {
  return (
    <Carousel
      className="rounded-xl px-auto"
      autoplay={true}
      randomize={true}
      autoplayDelay={3000}
      loop={true}
      navigation={() => <></>}
      transition={{ type: "tween", duration: 0.3 }}
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
