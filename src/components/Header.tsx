import { HeaderMenuData } from "@/data";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between container">
        <div className="flex justify-between items-center gap-12">
          {/* Logo */}
          <Link
            className="flex items-center justify-center gap-4 py-4 text-lg"
            href={"/"}
          >
            <Image
              className="size-[32px]"
              src={"/svg/logo.svg"}
              width={100}
              height={100}
              alt="Logo"
            />
            <span className="font-semibold">Untitled UI</span>
          </Link>

          {/* Large Screens Nav  */}
          <nav className="max-sm:hidden">
            <ul className="flex items-center justify-between gap-4">
              {HeaderMenuData.map((nav) => (
                <li
                  className="text-sm font-medium flex justify-center items-center gap-2"
                  key={nav.label}
                >
                  {nav.label}

                  {/* Open Menu */}
                  {nav.child && (
                    <div className="">
                      <ChevronDown className="size-4" />
                      <span className="sr-only">Open {nav.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Small Screen Nav */}
        <nav className="sm:hidden">
          <Menu />
        </nav>

        {/* Avatar */}
        <div className="max-sm:hidden rounded-full overflow-hidden size-10">
          <Image
            className="w-full"
            src={"/png/avatar/olivia.png"}
            width={1000}
            height={1000}
            alt="Logo"
          />
        </div>
      </div>
    </header>
  );
};
