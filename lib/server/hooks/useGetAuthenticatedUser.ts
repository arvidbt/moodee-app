import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAuthenticatedUser } from "../actions";
import { User } from "@supabase/supabase-js";

export function useGetAuthenticatedUser(): UseQueryResult<User | null, Error> {
  return useQuery({
    queryKey: ["authenticated_user"],
    queryFn: getAuthenticatedUser,
    staleTime: Infinity,
  });
}
