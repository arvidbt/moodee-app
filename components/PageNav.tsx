"use client";

import MoodeeIcon from "./ModeeIcon";
import Link from "next/link";
import NavBarMenu from "./NavBarMenu";

export default function PageNav() {
  return (
    <nav className="w-full flex justify-center h-16">
      <div className="w-full flex justify-between items-center p-3 text-sm">
        <div className="flex items-center justify-center">
          <p className="font-black select-none z-50 text-lg ">
            <span className="inline-block align-middle mr-2">
              <MoodeeIcon width="20" height="20" />
            </span>
            {/* Change here also. */}
            <Link href={"/my-mood"}>Moodee </Link>
          </p>
        </div>
        <NavBarMenu />
      </div>
    </nav>
  );
}
