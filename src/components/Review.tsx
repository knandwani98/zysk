import Image from "next/image";
import React from "react";

export const Review = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container flex flex-col gap-6 justify-center items-center">
        <Image
          src={"/svg/companies/sisyphus.svg"}
          className="max-sm:w-32"
          height={1000}
          width={96}
          alt="company logo"
        />

        <h2 className="text-3xl text-center max-w-[800px] font-medium">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h2>

        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src={"/png/avatar/candice.png"}
            width={46}
            height={46}
            alt="candice's"
          />

          <div className="text-center">
            <h3 className="text-sm font-semibold">Candice Wu</h3>
            <p className="text-xs mt-1">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
};
