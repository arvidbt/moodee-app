"use client";

import { Button } from "@/components";
import { getURL } from "../utils";
import { useSupabaseClient } from "../supabase/client";

export function SignInForm() {
  function loginWithOAuth() {
    const supabase = useSupabaseClient();
    const defaultUrl = getURL();

    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${defaultUrl}/auth/callback`,
      },
    });
  }

  return (
    <form action={loginWithOAuth}>
      <Button
        title="Sign in with Google"
        customStyling="w-full py-3 px-12"
      ></Button>
    </form>
  );
}
