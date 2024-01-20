"use client";

import { getURL } from "../utils";
import { useSupabaseClient } from "../supabase/client";

interface Props {
  children: React.ReactNode;
}

export function SignInForm({ children }: Props) {
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

  return <form action={loginWithOAuth}>{children}</form>;
}
