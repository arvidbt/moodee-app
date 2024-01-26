import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getLoggedDaysById } from "../actions";

interface MoodEntry {
  day_id: number;
  user_id: string;
  mood: number;
  note: string;
  logged: boolean;
  created_at: string;
}

export function useGetLoggedDays(
  user_id: string | undefined
): UseQueryResult<MoodEntry[] | null, Error> {
  return useQuery({
    queryKey: ["logged_journal_items"],
    queryFn: () => getLoggedDaysById(user_id!),
    enabled: !!user_id,
  });
}
