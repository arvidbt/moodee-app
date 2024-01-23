"use client";

import MoodeeIcon from "./ModeeIcon";
import { usePathname } from "next/navigation";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

export default function PageNav() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full flex justify-between items-center p-3 text-sm">
        <div className="flex items-center justify-center">
          <p className="font-black select-none z-50 text-lg">
            <span className="inline-block align-middle mr-2">
              <MoodeeIcon width="20" height="20" />
            </span>
            <Link href={"/my-mood"}>Moodee</Link>
          </p>
        </div>
        {usePathname() === "/my-mood" || usePathname() === "/my-journal" ? (
          <div className="flex gap-2">
            <SignOutButton />
          </div>
        ) : (
          <div className="flex gap-2">
            <SignInButton />
          </div>
        )}
      </div>
    </nav>
  );
}
