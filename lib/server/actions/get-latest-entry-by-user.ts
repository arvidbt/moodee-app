"use server";

import { UUID } from "crypto";
import { useSupabaseServer } from "@/lib/supabase/server";

export async function getLatestEntryByUser(user_id: string) {
  const supabase = useSupabaseServer();
  const { data } = await supabase
    .from("logged_days")
    .select("created_at")
    .eq("user_id", user_id as UUID)
    .order("day_id", { ascending: false })
    .limit(1)
    .single();

  return data;
}
