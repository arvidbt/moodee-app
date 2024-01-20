import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getLatestEntryByUser } from "../actions";

export function useGetLatestEntry(user_id: string | undefined) {
  return useQuery({
    queryKey: ["get_latest_entry", user_id],
    queryFn: () => getLatestEntryByUser(user_id!),
    enabled: !!user_id,
  }) satisfies UseQueryResult<{ created_at: string } | null, Error>;
}
