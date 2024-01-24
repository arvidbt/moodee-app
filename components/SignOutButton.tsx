import { SignOutForm } from "@/lib/forms";
import { Button } from ".";
import { ExitIcon } from "@radix-ui/react-icons";

export default function SignOutButton() {
  return (
    <SignOutForm>
      <Button title="Sign out">
        <ExitIcon />
      </Button>
    </SignOutForm>
  );
}
