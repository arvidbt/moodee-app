"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  urlName?: string;
  customColour?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  customStyling?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  title,
  urlName,
  customColour,
  disabled,
  type,
  children,
  customStyling,
  onClick,
}: ButtonProps) {
  function isActive() {
    if (!urlName) {
      return false;
    }
    return usePathname().includes(urlName);
  }

  return (
    <button
      type={type ? type : "submit"}
      disabled={disabled ? true : false}
      onClick={onClick}
      className={cn(
        "py-2 px-3 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover font-semibold w-full select-none",
        isActive() &&
          "underline underline-offset-4 decoration-app-orange decoration-2",
        customColour && customColour && customStyling && customStyling
      )}
    >
      {title}
      {children}
    </button>
  );
}
