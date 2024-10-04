import React from "react";
import { Button } from "./ui/Button";

export const Trial = () => {
  return (
    <section className="bg-gray-200/30 py-20">
      <div className="container flex flex-col gap-6 text-center">
        <h2 className="text-3xl font-semibold">Start your free trial</h2>

        <p className="text-lg text-gray-500">
          Join over 4,000+ startups already growing with Untitled.
        </p>

        <div className="flex max-sm:flex-col justify-center gap-3">
          <Button className="sm:order-1">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};
