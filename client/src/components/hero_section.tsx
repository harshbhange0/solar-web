import React from "react";
import bgImage from "../assets/hero-bg.jpg";

import { Button } from "./ui/button";
import { Separator } from "../components/ui/separator";


import { FiArrowRight } from "react-icons/fi";
export default function HeroSection() {
  return (
    <section>
      <div
        className="min-h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="mx-auto flex h-full flex-row items-center justify-center">
          <div className="px-5 pt-20 pb-10">
            <h1 className="text-background/50 dark:text-foreground/90 text-3 xl scroll-m-20 py-10 text-center font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            </h1>
            <div className="flex flex-row items-center justify-center gap-2 text-center">
              <Button
                variant={"outline"}
                className="flex flex-row items-center justify-center text-xl"
              >
                <p className="my-4">Know More</p>
                <div>
                  <FiArrowRight />
                </div>
              </Button>
            </div>
            <p className="backdrop-blur-md px-3 py-4 rounded-sm mx-auto mt-4 w-full text-center text-sm leading-4 text-stone-600 sm:w-1/2 sm:leading-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              possimus veniam cumque dolorum deleniti asperiores cupiditate quam
              ducimus voluptas ad.
              <Separator className="mt-2" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
