"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavProps {
  title: string;
  url: string;
  children: React.ReactNode;
}

export default function NavBarItem({ title, url, children }: NavProps) {
  function isActive() {
    if (!url) {
      return false;
    }
    return usePathname().includes(url);
  }

  return (
    <div className="flex items-center justify-center">
      <Link
        href={url}
        className={cn(
          "py-2 px-2 rounded-md no-underline font-semibold w-full select-none text-sm",
          isActive() &&
            "underline underline-offset-4 decoration-app-orange dark:decoration-app-dark-green decoration-2"
        )}
      >
        <div className="flex items-center justify-center gap-1">
          <p>{title}</p>
          {children}
        </div>
      </Link>
    </div>
  );
}
