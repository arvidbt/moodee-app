"use client";

import { UUID } from "crypto";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { useSupabaseClient } from "@/lib/supabase/client";
import LoadingSpinner from "./LoadingSpinner";
import JournalGridItem from "./JournalGridItem";

interface Props {
  user_id: UUID;
}

export function JournalGrid({ user_id }: Props) {
  const supabase = useSupabaseClient();
  const { data, isLoading } = useQuery(
    supabase.from("logged_days").select("mood").eq("user_id", user_id),
    {} // Put configs here.
  );

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data && (
        <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 flex flex-col justify-center items-center animate-in p-2">
              <div className="rounded-md ">
                <h1 className="font-bold text-xl mb-2">
                  Your mood the last{" "}
                  <span className="underline underline-offset-4 decoration-app-dark-green decoration-2 ">
                    {data.length} days.
                  </span>
                </h1>
                <div className="grid grid-cols-7 gap-2 rounded-sm py-2 mb-2 grid-animate-in">
                  {data.map((item, index) => (
                    <JournalGridItem
                      index={index}
                      key={index}
                      mood={item.mood}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
