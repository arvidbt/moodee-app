import { Button } from "@/components";

interface Props {
  children: React.ReactNode;
}

export function SignOutForm({ children }: Props) {
  return (
    <form action="/auth/signout" method="post">
      {children}
    </form>
  );
}
