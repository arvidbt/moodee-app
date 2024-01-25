import { env } from "@/lib";
import { createBrowserClient } from "@supabase/ssr";

export function useSupabaseClient() {
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
