import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "primary";
}

export const Button = (props: ButtonProps) => {
  const { children, className, variant = "primary" } = props;

  return (
    <button
      className={
        "text-sm max-sm:w-full px-5 py-3 font-semibold flex gap-2 items-center justify-center rounded-lg " +
        (variant === "outline" ? "border-2 " : " bg-primary text-white ") +
        (className ? className : " ")
      }
    >
      {children}
    </button>
  );
};
