import React from "react";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { image1, image2, image3, imag4 } from "../assets/carosoul_images";
import { FaArrowRight } from "react-icons/fa6";
function HeroSection() {
  const images = [image1, image2, image3, imag4];
  return (
    <section
      id="hero"
      className="dark:to-secondary/15 relative flex h-screen w-full items-center justify-center bg-white/10 bg-gradient-to-t from-[var(--bg-accent-color)] from-5% to-[var(--for-ground-accent-color)] to-100% p-10 backdrop-blur-xs dark:from-white/15"
    >
      <div className="mx-auto grid max-w-screen-xl px-4 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight text-[#1a1a1d] md:text-5xl xl:text-6xl dark:text-white">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="mb-6 max-w-2xl font-[600] text-gray-700 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur quae assumenda fuga, placeat temporibus repudiandae
            labore.
          </p>
          <Button className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium focus:ring-4">
            Get started
            <div className="ml-3">
              <FaArrowRight />
            </div>
          </Button>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <Carousel
            orientation="horizontal"
            opts={{ loop: true, watchDrag: false }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((src, index) => {
                return (
                  <CarouselItem className="">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="h-96 w-full rounded-lg object-cover"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
