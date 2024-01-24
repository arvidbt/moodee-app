"use client";

import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from ".";
import {
  useGetAuthenticatedUser,
  useGetLatestEntry,
  useInsertDailyEntry,
} from "@/lib/server/hooks";
import { redirect } from "next/navigation";
import Link from "next/link";
import { mapMoodToColour } from "@/lib/utils";

const moods = [1, 2, 3, 4, 5] as const;
export type Mood = (typeof moods)[number];

export const dynamic = "force-dynamic";
export default function MyMoodContainer() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [error, setError] = useState();

  const {
    data: authenticatedUser,
    isLoading: loadingAuthUser,
    error: authUserError,
  } = useGetAuthenticatedUser();

  const {
    data: latestUserEntry,
    isLoading: loadingLatestUserEntry,
    error: latestUserEntryError,
  } = useGetLatestEntry(authenticatedUser?.id);

  const {
    data: insertedUserEntry,
    isLoading: loadingInsertUserEntry,
    error: insertUserEntryError,
  } = useInsertDailyEntry(authenticatedUser?.id, selectedMood, enabled);

  // This stuff needs to be handled by middleware.
  if (!authenticatedUser) {
    return redirect("/");
  }

  function hasUserLoggedAlready(created_at: string) {
    const createdAtDate = new Date(created_at);
    const currentDate = new Date();

    const createdAtDateString = createdAtDate.toLocaleDateString("en-US");
    const currentDateString = currentDate.toLocaleDateString("en-US");
    return createdAtDateString === currentDateString;
  }

  function setUserMood(mood: Mood) {
    setSelectedMood((prevSelectedMood) => {
      return prevSelectedMood === mood ? null : mood;
    });
  }

  function setOpacityLevel(mood: Mood) {
    return (
      selectedMood === null || mood === selectedMood
        ? "opacity-100 "
        : "opacity-50 "
    ).concat("transition ease-in-out delay-75");
  }

  // This is a sketchy solution, lol. Should find a better way to do it.
  if (insertedUserEntry || hasUserLoggedAlready(latestUserEntry?.created_at!)) {
    return redirect("/my-journal");
  }

  return (
    <div>
      {loadingInsertUserEntry && <LoadingSpinner />}
      {loadingLatestUserEntry && <LoadingSpinner />}
      {/* This is a fallback. */}
      {!loadingLatestUserEntry &&
        !loadingLatestUserEntry &&
        insertedUserEntry === undefined &&
        hasUserLoggedAlready(latestUserEntry?.created_at!) && (
          <div className="flex flex-col gap-2">
            <p className={cn("p-4 font-bold")}>
              You have done your part today, come back tomorrow to continue
              logging your mood.
            </p>
            <Link href={"/my-journal"}>
              <Button title="Take me to my journal." />
            </Link>
          </div>
        )}

      {!loadingLatestUserEntry &&
        !hasUserLoggedAlready(latestUserEntry?.created_at!) && (
          <div>
            {!loadingLatestUserEntry &&
              !loadingInsertUserEntry &&
              !hasUserLoggedAlready(latestUserEntry?.created_at!) && (
                <div>
                  <div className="">
                    <h1 className="font-bold text-2xl animate-in dela">
                      How are you feeling?
                    </h1>
                    <div className="grid grid-cols-5 py-2 gap-2 grid-animate-in">
                      {moods.map((mood) => (
                        <button
                          onClick={() => setUserMood(mood)}
                          key={mood}
                          type="submit"
                          className={cn(
                            "w-14 h-14 rounded-md outline-none shadow-lg",
                            mapMoodToColour(mood),
                            setOpacityLevel(mood)
                          )}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        title="Make a note"
                        disabled={enabled}
                        onClick={() => console.log("Hej")}
                      />
                      <form action={() => setEnabled(true)}>
                        <Button title="Submit" disabled={enabled} />
                      </form>
                    </div>
                  </div>
                </div>
              )}
          </div>
        )}
    </div>
  );
}
