import React from "react";
import { Card } from "./ui/Card";
import { BlogData } from "@/data";
import { Button } from "./ui/Button";

export const Blogs = () => {
  return (
    <section className="py-12">
      <div className="container flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h6 className="text-primary text-xs sm:text-lg font-semibold">
            Our blog
          </h6>

          <Button className="max-sm:hidden">View all posts</Button>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold sm:mb-3">
          Latest blog posts
        </h2>

        <p className="text-lg sm:text-xl text-gray-500 sm:mb-4">
          Tool and strategies modern teams need to help their companies grow.
        </p>

        {/* All Blogs */}
        <div className="mt-8 flex max-sm:flex-col gap-16 justify-center items-center">
          {BlogData.map((blog) => (
            <Card key={blog.label} blog={blog} />
          ))}

          <Button className="sm:hidden">View all posts</Button>
        </div>
      </div>
    </section>
  );
};
