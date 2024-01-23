import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getLoggedDaysById } from "../actions";

export function useGetLoggedDays(user_id: string | undefined) {
  return useQuery({
    queryKey: ["logged_journal_items"],
    queryFn: () => getLoggedDaysById(user_id!),
    enabled: !!user_id,
  }) satisfies UseQueryResult<{ mood: number }[] | null, Error>;
}
