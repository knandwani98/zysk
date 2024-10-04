import { FeaturesData } from "@/data";
import Image from "next/image";
import React from "react";

export const Features = () => {
  return (
    <section className="text-center container flex flex-col gap-6 py-20">
      <h6 className="text-primary text-md font-semibold">Features</h6>

      <h2 className="text-3xl font-semibold">
        Analytics that feels like it&apos;s from the future
      </h2>

      <p className="text-lg text-gray-500 mb-8 max-w-[700px] mx-auto">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <ul className="grid sm:grid-cols-3 items-center justify-center gap-12">
        {FeaturesData.map((feature) => (
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
          </li>
        ))}
      </ul>
    </section>
  );
};
