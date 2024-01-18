import { Button } from "@/components";

export function SignOutForm() {
  return (
    <form action="/auth/signout" method="post">
      <Button title="Sign out" />
    </form>
  );
}
