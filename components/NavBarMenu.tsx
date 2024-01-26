"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { CalendarIcon, DashboardIcon } from "@radix-ui/react-icons";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import NavBarItem from "./NavItem";

export default function NavBarMenu() {
  const currentUrl = usePathname();
  const urls = ["/my-mood", "/my-journal", "/my-dashboard"];

  return (
    <div>
      {urls.some((e) => e === currentUrl) ? (
        <div className="flex gap-2">
          <NavBarItem title="My Journal" url="/my-journal">
            <CalendarIcon />
          </NavBarItem>
          {/* <NavBarItem title="My Dashboard" url="/my-dashboard">
            <CalendarIcon />
          </NavBarItem> */}
          <SignOutButton />
        </div>
      ) : (
        <div className="flex gap-2">
          <SignInButton />
        </div>
      )}
    </div>
  );
}
