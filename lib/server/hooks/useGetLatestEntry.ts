import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getLatestEntryByUser } from "../actions";

export function useGetLatestEntry(
  user_id: string | undefined
): UseQueryResult<{ created_at: string; mood: number } | null, Error> {
  return useQuery({
    queryKey: ["get_latest_entry", user_id],
    queryFn: () => getLatestEntryByUser(user_id!),
    enabled: !!user_id,
  });
}
