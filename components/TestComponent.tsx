"use client";

import { UUID } from "crypto";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { useSupabaseClient } from "@/lib/supabase/client";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  user_id: UUID;
}

export function TestClientSideFetching({ user_id }: Props) {
  const supabase = useSupabaseClient();
  const { data, isLoading } = useQuery(
    supabase.from("logged_days").select("mood").eq("user_id", user_id),
    {} // Put configs here.
  );
  console.log(isLoading);
  console.log(data);
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <p>{user_id}</p>}
    </div>
  );
}
