import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { insertDailyMoodEntry } from "../actions";
import { revalidatePath } from "next/cache";

export function useInsertDailyEntry(
  user_id: string | undefined,
  selectedMood: number | null,
  enabled: boolean
): UseQueryResult<void, Error> {
  return useQuery({
    queryKey: ["insert_daily_mood_entry"],
    queryFn: () => insertDailyMoodEntry(user_id!, selectedMood!),
    enabled: enabled,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
