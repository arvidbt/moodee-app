import { SignInForm } from "@/lib/forms";
import { Button } from ".";

export default function SignInButton() {
  return (
    <SignInForm>
      <Button
        title="Sign in with Google"
        customStyling="w-full py-3 px-12"
      ></Button>
    </SignInForm>
  );
}
