import { SignInForm } from "@/lib/forms";
import { Button } from ".";
import { EnterIcon } from "@radix-ui/react-icons";

export default function SignInButton() {
  return (
    <SignInForm>
      <Button title="Sign in with Google" customStyling="w-full py-3 px-12">
        <EnterIcon />
      </Button>
    </SignInForm>
  );
}
