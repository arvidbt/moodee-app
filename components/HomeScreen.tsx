"use client";

import { UUID } from "crypto";
import { JournalGrid } from "./JournalGrid";
import { useQuery } from "@tanstack/react-query";
import DisplayError from "./DisplayError";
import SelectMood from "./SelectMood";
import LoadingSpinner from "./LoadingSpinner";
import {
  getAuthenticatedUser,
  getLatestEntryByUser,
} from "@/lib/server/actions";

export default function HomeScreen() {
  function hasUserLoggedAlready(created_at: string) {
    const createdAtDate = new Date(created_at);
    const currentDate = new Date();

    const createdAtDateString = createdAtDate.toLocaleDateString("en-US");
    const currentDateString = currentDate.toLocaleDateString("en-US");
    return createdAtDateString === currentDateString;
  }

  const { data: user, error } = useQuery({
    queryKey: ["authenticated_user"],
    queryFn: getAuthenticatedUser,
  });

  const user_id = user?.id;

  const { data, isLoading } = useQuery({
    queryKey: ["get_latest_entry", user?.id],
    queryFn: () => getLatestEntryByUser(user?.id as string),
    enabled: !!user?.id,
  });

  if (error) {
    return (
      <DisplayError error_message={error.message} error_name={error.name} />
    );
  }

  if (user_id === undefined) {
    return <div>Could not load user...</div>;
  }

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {hasUserLoggedAlready(data?.created_at) && user_id ? (
        <div>{!isLoading && <JournalGrid user_id={user_id as UUID} />}</div>
      ) : (
        <div>{!isLoading && <SelectMood user_id={user_id} />}</div>
      )}
    </div>
  );
}
