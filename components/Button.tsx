"use client";
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
interface ButtonProps {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  customColour?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  customStyling?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  title,
  customColour,
  disabled,
  type,
  children,
  customStyling,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type ? type : "submit"}
      disabled={disabled ? true : false}
      onClick={onClick}
      className={cn(
        "py-2 px-2 rounded-md no-underline font-semibold w-full select-none text-sm dark:bg-app-dark-green bg-app-orange opacity-90 hover:opacity-100",
        customColour && customColour && customStyling && customStyling
      )}
    >
      <div className="flex items-center justify-center gap-1">
        {title}
        {children}
      </div>
    </button>
  );
}
