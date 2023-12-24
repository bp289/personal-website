"use client";
import { Carousel, Button } from "@material-tailwind/react";
import Image from "next/image";
import { clsx } from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function GenericCarousel({
  autoplay,
  autoplayDelay,
  loop,
  images,
  imageHeight,
  imageWidth,
  chevronColor,
}) {
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
          className="!absolute top-2/4 left-1 -translate-y-2/4  hover:bg-transparent active:bg-transparent"
        >
          <ChevronLeftIcon
            className={clsx("h-6 w-6 transition ", {
              "text-black": chevronColor == "black",
              "text-white": chevronColor == "white",
            })}
          />
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
          <ChevronRightIcon
            className={clsx("h-6 w-6 transition ", {
              "text-black": chevronColor == "black",
              "text-white": chevronColor == "white",
            })}
          />
        </Button>
      )}
    >
      {images.map((image) => {
        return (
          <Image
            key={image}
            src={image}
            alt="projects"
            width={imageWidth}
            height={imageHeight}
            className="mx-auto object-contain h-[20rem]"
          />
        );
      })}
    </Carousel>
  );
}
