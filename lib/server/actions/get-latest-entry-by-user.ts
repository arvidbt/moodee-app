"use server";

import { useSupabaseServer } from "@/lib/supabase/server";

export async function getLatestEntryByUser(user_id: string) {
  const supabase = useSupabaseServer();
  const { data } = await supabase
    .from("logged_days")
    .select()
    .eq("user_id", user_id)
    .order("day_id", { ascending: false })
    .limit(1)
    .single();

  return data;
}
