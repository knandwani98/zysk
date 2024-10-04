import { BlogProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  blog: BlogProps;
}

export const Card = (props: CardProps) => {
  const { blog } = props;

  return (
    <div className="flex flex-col gap-2">
      <Image
        className="w-full"
        src={`/png/blogs/${blog.img}.png`}
        alt="text"
        width={1000}
        height={1000}
      />

      <h6 className="text-primary text-xs font-semibold mt-4">{blog.label}</h6>
      <div className="flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-semibold hover:underline">
          {blog.title}
        </Link>

        <div>
          <ArrowUpRight />
          <span className="sr-only">Open in new tab icon</span>
        </div>
      </div>

      <p className="text-gray-500">{blog.description}</p>

      <div className="flex justify-normal items-center gap-4 mt-4">
        <Image
          className="size-10"
          src={`/png/avatar/${blog.author.avatar}.png`}
          alt="text"
          width={1000}
          height={1000}
        />

        <div>
          <h4 className="font-semibold">{blog.author.name}</h4>
          <p className="text-sm text-gray-500">{blog.author.date}</p>
        </div>
      </div>
    </div>
  );
};
