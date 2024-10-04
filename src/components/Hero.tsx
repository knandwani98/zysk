import { CompaniesData } from "@/data";
import { ArrowRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="py-16 container flex flex-col text-center gap-8">
      {/* Pill  */}
      <div className="rounded-[999px] text-xs text-primary bg-primary/10 border border-primary/20 flex items-center justify-between gap-4 max-w-80 mx-auto ">
        {/*  */}
        <div className="rounded-[999px] bg-white text-primary px-1.5 py-0.5 m-1 border border-primary/30">
          <p className="font-medium whitespace-nowrap">New feature</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <p className="font-medium whitespace-nowrap">
            Checkout the team dashboard
          </p>
          <div className="mr-2">
            <ArrowRight className="size-4" />
            <span className="sr-only">Right Arrow</span>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold">
        Beautiful analytics to grow smarter
      </h1>

      {/* Para */}
      <p className=" text-gray-500 text-lg max-w-[700px] mx-auto">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      {/* Buttons */}
      <div className="flex justify-center items-center max-sm:flex-col gap-4">
        <Button className="sm:order-1">Sign up</Button>

        <Button variant="outline">
          <CirclePlay className="size-4" />
          <span> Demo</span>
          <span className="sr-only">Play Icon</span>
        </Button>
      </div>

      {/* Screen */}
      <div className="relative w-full sm:h-[600px] sm:overflow-hidden sm:border-b border-gray-300/30">
        <Image
          className="sm:absolute m-0 top-0 left-0 mt-8 w-full border-4 border-gray-950 rounded-2xl drop-shadow-2xl"
          src="/png/screen/desktop.png"
          width={1000}
          height={1000}
          alt="preview"
        />
      </div>

      {/* Companies */}
      <p className="mt-8 sm:mt-12 font-medium">Join 4,000+ companies already growing</p>

      <ul className="grid grid-cols-2 sm:grid-cols-6 items-baseline justify-center gap-6 p-4">
        {CompaniesData.map((company) => (
          <li key={company}>
            <Image
              className="w-full"
              src={`/svg/companies/${company}.svg`}
              alt={company}
              width={1000}
              height={1000}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
