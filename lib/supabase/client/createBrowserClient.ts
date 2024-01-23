import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/lib/utils/env.mjs";

export function useSupabaseClient() {
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
