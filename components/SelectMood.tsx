"use client";

import { redirect } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { cn, mapMoodToColour } from "@/lib/utils";
import { insertDailyMoodEntry } from "@/lib/server/actions";
import Button from "./generics/Button";
import LoadingSpinner from "./LoadingSpinner";

const moods = [1, 2, 3, 4, 5] as const;
export type Mood = (typeof moods)[number];

interface Props {
  user_id: string | undefined;
}

export default function SelectMood({ user_id }: Props) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);

  if (!user_id) {
    return redirect("/");
  }

  const { isLoading } = useQuery({
    queryKey: ["insert_daily_mood_entry"],
    queryFn: () => insertDailyMoodEntry(user_id!, selectedMood!),
    enabled: enabled,
    staleTime: Infinity,
  });

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
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
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
          <form action={() => setEnabled(true)}>
            <Button title="Submit" disabled={enabled}></Button>
          </form>
        </div>
      )}
    </div>
  );
}
