"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { CalendarIcon, DashboardIcon } from "@radix-ui/react-icons";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

export default function NavBarMenu() {
  const currentUrl = usePathname();
  const urls = ["/my-mood", "/my-journal", "/my-dashboard"];

  return (
    <div>
      {urls.some((e) => e === currentUrl) ? (
        <div className="flex gap-2">
          <Link href="/my-journal">
            <Button title="My journal" urlName="/my-journal">
              <CalendarIcon />
            </Button>
          </Link>
          <Link href="/my-dashboard">
            <Button title="My dashboard" urlName="/my-dashboard">
              <DashboardIcon />
            </Button>
          </Link>
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
