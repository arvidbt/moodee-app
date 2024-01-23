import { ReactNode } from "react";
import { PageFooter, PageNav } from ".";

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="flex-1 w-full flex flex-col gap-5 items-center">
      {children}
    </div>
  );
}
