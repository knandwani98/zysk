import React from "react";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";
import Image from "next/image";
import { FeaturesData } from "@/data";
import { ArrowRight } from "lucide-react";

export const Analytics = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-4 text-center">
        {/*  */}
        <div className="flex items-center justify-center">
          <span className="rounded-[999px] text-primary font-medium px-2 py-1 m-1 border border-primary/30 bg-primary/10 text-xs">
            Features
          </span>
        </div>

        <h3 className="text-3xl font-semibold ">
          Cutting-edge features for advanced analytics
        </h3>
        <p className="text-lg text-gray-500 max-w-[690px] mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="drop-shadow-xl mt-12">
          <div className="flex justify-center items-center relative h-[460px] sm:h-[540px]  max-sm:overflow-hidden">
            {/* Large screens */}
            <div
              className="w-[695px] max-sm:hidden"
              style={{
                position: "absolute",
                left: "47%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                className="w-full border-4 border-black rounded-2xl ml-20"
                src={"/png/screen/desktop.png"}
                width={1000}
                height={1000}
                alt="desktop screen"
              />

              <Image
                className="absolute -bottom-8 sm:left-0 w-[160px] z-10"
                src={"/png/screen/mobile.png"}
                width={1000}
                height={1000}
                alt="mobile screen"
              />
            </div>

            <Image
              className="absolute top-0 left-0 right-0 w-full z-10 sm:hidden"
              src={"/png/screen/mobile.png"}
              width={1000}
              height={1000}
              alt="mobile screen"
            />
          </div>
        </div>

        <ul className="grid sm:grid-cols-3 items-center justify-center gap-12 my-16">
          {FeaturesData.slice(0, 3).map((feature) => (
            <li
              key={feature.icons}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <span className="border flex items-center justify-center size-10 rounded-xl">
                <Image
                  className="p-2"
                  height={1000}
                  width={1000}
                  src={`/svg/features/${feature.icons}.svg`}
                  alt={feature.icons}
                />
              </span>

              <h3 className="font-semibold mt-4">{feature.heading}</h3>
              <p className="text-gray-500">{feature.text}</p>

              <button className="flex justify-center items-center text-primary gap-2 font-bold mt-4">
                Learn more
                <div>
                  <ArrowRight className="size-5" />
                  <span className="sr-only">arrow icon</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="separator" />

      <FAQ />
      <CTA />
    </section>
  );
};
