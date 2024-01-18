import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export function useSupabaseServer() {
  const cookieStore = cookies();
  return createClient(cookieStore);
}
