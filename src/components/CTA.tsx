import React from "react";
import { Button } from "./ui/Button";
import Image from "next/image";

export const CTA = () => {
  return (
    <section className="bg-gray-200/30 py-8 container rounded-2xl my-16">
      <div className="flex flex-col gap-6 text-center items-center">
        <div className="flex justify-center items-end">
          <Image
            className="w-full size-20 rounded-full -mr-8"
            width={1000}
            height={1000}
            src={"/png/avatar/alec.png"}
            alt="experts"
          />
          <Image
            className="w-full size-24 rounded-full relative z-10"
            width={1000}
            height={1000}
            src={"/png/avatar/olivia.png"}
            alt="experts"
          />
          <Image
            className="w-full size-20 rounded-full -ml-8"
            width={1000}
            height={1000}
            src={"/png/avatar/lori.png"}
            alt="experts"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Still have questions?</h2>
          <p className="text-lg text-gray-500">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>

        <div className="flex max-sm:flex-col justify-center gap-3">
          <Button>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};
