"use server";

import { useSupabaseServer } from "@/lib/supabase/server";

export async function getAuthenticatedUser() {
  const supabase = useSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
