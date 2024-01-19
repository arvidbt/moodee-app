"use server";

import { revalidatePath } from "next/cache";
import { useSupabaseServer } from "@/lib/supabase/server";

export async function insertDailyMoodEntry(user_id: string, mood: number) {
  const supabase = useSupabaseServer();

  const data = await supabase
    .from("logged_days")
    .insert([
      {
        user_id: user_id,
        mood: mood,
        note: "no note",
        logged: true,
      },
    ])
    .select();
  revalidatePath("/home");
  console.log(data);
  return data;
}
