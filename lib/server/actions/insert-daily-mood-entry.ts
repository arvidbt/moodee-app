"use server";

import { revalidatePath } from "next/cache";
import { useSupabaseServer } from "@/lib/supabase/server";
import { Dispatch, SetStateAction } from "react";

export async function insertDailyMoodEntry(user_id: string, mood: number) {
  const supabase = useSupabaseServer();

  const { data } = await supabase
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
  revalidatePath("/my-mood");
  return data;
}
