"use client";

import { UUID } from "crypto";
import { JournalGrid } from "./JournalGrid";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "@/lib/supabase/client";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import LoadingSpinner from "./LoadingSpinner";
import TemporaryName from "./TemporaryName";

interface Props {
  user_id: UUID;
}

export default function HomeScreen({ user_id }: Props) {
  const [userLoggedAlready, setUserLoggedAlready] = useState(true);
  const supabase = useSupabaseClient();
  const { data } = useQuery(
    supabase
      .from("logged_days")
      .select("created_at")
      .eq("user_id", user_id)
      .order("day_id", { ascending: false })
      .limit(1)
      .single(),
    {} // Put configs here.
  );

  function isCreatedToday(created_at: string) {
    const createdAtDate = new Date(created_at);
    const currentDate = new Date();

    const createdAtDateString = createdAtDate.toLocaleDateString("en-US");
    const currentDateString = currentDate.toLocaleDateString("en-US");
    setUserLoggedAlready(createdAtDateString === currentDateString);
  }

  useEffect(() => {
    if (data) {
      isCreatedToday(data.created_at);
    }
  }, [data]);

  return (
    <div>
      {/* {isLoading && <LoadingSpinner />} */}
      {userLoggedAlready ? (
        <JournalGrid user_id={user_id} />
      ) : (
        <TemporaryName />
      )}
    </div>
  );
}
