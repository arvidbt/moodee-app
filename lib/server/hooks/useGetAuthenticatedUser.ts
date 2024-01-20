import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAuthenticatedUser } from "../actions";
import { User } from "@supabase/supabase-js";

export function useGetAuthenticatedUser() {
  return useQuery({
    queryKey: ["authenticated_user"],
    queryFn: getAuthenticatedUser,
    staleTime: Infinity,
  }) satisfies UseQueryResult<User | null, Error>;
}
