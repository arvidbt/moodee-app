"use client";

import DisplayError from "./DisplayError";
import LoadingSpinner from "./LoadingSpinner";
import JournalGridItem from "./JournalGridItem";
import { useEffect, useState } from "react";
import { cn, mapMoodToColour } from "@/lib/utils";
import { Button } from ".";
import {
  useGetAuthenticatedUser,
  useGetLatestEntry,
  useGetLoggedDays,
  useInsertDailyEntry,
} from "@/lib/server/hooks";

const moods = [1, 2, 3, 4, 5] as const;
export type Mood = (typeof moods)[number];

export default function HomeLandingPage() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [userHasLogged, setUserHasLogged] = useState<boolean>(false);

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
    data: userLoggedDays,
    isLoading: loadingUserLoggedDays,
    error: userLoggedDaysError,
  } = useGetLoggedDays(authenticatedUser?.id);

  const { isLoading: loadingInsertUserEntry, error: insertUserEntryError } =
    useInsertDailyEntry(authenticatedUser?.id, selectedMood, enabled);

  const [latestEntry, setLatestEntry] = useState<boolean>();

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
        ? "opacity-100"
        : "opacity-50"
    ).concat(" transition ease-in-out delay-75");
  }

  return (
    <div>
      {loadingLatestUserEntry && <LoadingSpinner />}
      {!loadingLatestUserEntry &&
      hasUserLoggedAlready(latestUserEntry?.created_at!) ? (
        <div>
          {!loadingUserLoggedDays && userLoggedDays && (
            <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex-1 flex flex-col justify-center items-center animate-in p-2">
                  <div>
                    <h1 className="font-bold text-xl mb-2">
                      Your mood the last{" "}
                      <span className="underline underline-offset-4 decoration-app-dark-green decoration-2 ">
                        {userLoggedDays.length} days.
                      </span>
                    </h1>
                    <div className="grid grid-cols-7 gap-2 rounded-sm py-2 mb-2 grid-animate-in">
                      {userLoggedDays.map((item, index) => (
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
      ) : (
        <div>
          {!loadingLatestUserEntry &&
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
