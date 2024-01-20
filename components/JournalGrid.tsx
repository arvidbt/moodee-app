"use client";

import LoadingSpinner from "./LoadingSpinner";
import JournalGridItem from "./JournalGridItem";
import { useQuery } from "@tanstack/react-query";
import { getLoggedDaysById } from "@/lib/server/actions";

interface Props {
  user_id: string;
}

export function JournalGrid({ user_id }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["logged_journal_items"],
    queryFn: () => getLoggedDaysById(user_id),
  });

  return (
    <div>
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
