"use client";
import { Carousel, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export function GenericCarousel({ autoplay, autoplayDelay, loop, images }) {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
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
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="React"
        width="500"
        height="500"
        className="object-cover"
      />
    </Carousel>
  );
}
