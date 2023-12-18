"use client";
import { Carousel, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export function GenericCarousel({ autoplay, autoplayDelay, loop, images }) {
  return (
    <Carousel
      autoplay={autoplay || true}
      autoplayDelay={autoplayDelay || 5000}
      loop={loop || true}
      prevArrow={({ handlePrev }) => (
        <Button
          variant="text"
          size="lg"
          ripple={false}
          onClick={handlePrev}
          className="!absolute top-2/4 left-1 -translate-y-2/4  hover:bg-transparent active:bg-transparent">
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
      )}
      nextArrow={({ handleNext }) => (
        <Button
          variant="text"
          size="lg"
          ripple={false}
          onClick={handleNext}
          className="!absolute top-2/4 !right-1 -translate-y-2/4 hover:bg-transparent active:bg-transparent ">
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      )}>
      {images?.map((image) => {
        <Image
          src={image}
          alt="projects"
          width="500"
          height="500"
          className="object-cover"
        />;
      })}
    </Carousel>
  );
}
