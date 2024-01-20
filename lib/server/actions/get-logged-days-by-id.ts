"use server";

import { useSupabaseServer } from "@/lib/supabase/server";

export async function getLoggedDaysById(user_id: string) {
  const supabase = useSupabaseServer();
  const { data } = await supabase
    .from("logged_days")
    .select("mood")
    .eq("user_id", user_id);

  return data;
}
