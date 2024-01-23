"use server";

import { useSupabaseServer } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getAuthenticatedUser() {
  const supabase = useSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  revalidatePath("/home");
  return user;
}
