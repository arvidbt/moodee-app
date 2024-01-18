"use client";

import MoodeeIcon from "./ModeeIcon";
import { SignOutForm } from "@/lib/forms";
import { SignInForm } from "@/lib/forms/sign-in-form";
import { usePathname } from "next/navigation";

export default function PageNav() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <div className="flex items-center justify-center">
          <p className="font-black select-none z-50 text-lg">
            <span className="inline-block align-middle mr-2">
              <MoodeeIcon width="20" height="20" />
            </span>
            Moodee
          </p>
        </div>
        {usePathname() === "/home" ? (
          <div className="flex gap-2">
            <SignOutForm />
          </div>
        ) : (
          <div className="flex gap-2">
            <SignInForm />
          </div>
        )}
      </div>
    </nav>
  );
}
