import { useSupabaseClient } from "@/lib/supabase/client";
import { TypedSupabaseClient } from "@/utils/supabase/types";
import { UUID } from "crypto";

export async function getLoggedDaysByID(userId: UUID) {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase
    .from("logged_days")
    .select()
    .eq("id", userId);
  console.log(data);
  return data;
}
