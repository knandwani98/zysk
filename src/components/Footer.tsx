import { FooterMenuData } from "@/data";
import { MenuProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      {/* Menu */}
      <ul className="container grid grid-cols-2 sm:grid-cols-6 py-12 max-sm:gap-8">
        {FooterMenuData.map((menu: MenuProps) => (
          <div key={menu.label} className="flex flex-col gap-3">
            {/* Menu Heading */}
            <li className="text-xs font-semibold text-gray-500">
              {menu.label}
            </li>

            {/* Sub menu */}
            {menu.child && menu.child.length > 0 && (
              <ul className="flex flex-col gap-3">
                {menu.child.map((child: MenuProps) => (
                  <li key={child.label} className="text-sm font-medium">
                    <Link href="/">{child.label}</Link>

                    {/* New - Badge */}
                    {child.new && (
                      <span className="text-green-800 bg-green-300/30 border border-green-500/40 rounded-[999px] px-1.5 py-0.5 !text-[10px] ml-2">
                        New
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>

      <hr className="separator" />

      {/* Bottom Footer */}
      <div className="container flex max-sm:flex-col items-start sm:items-center justify-center sm:justify-between py-6 pb-12">
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
        <small className="text-gray-500">
          &copy; 2077 United Ui. All rights reserved.
        </small>
      </div>
    </footer>
  );
};
