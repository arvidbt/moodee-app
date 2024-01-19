"use client";

import { redirect } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { cn, mapMoodToColour } from "@/lib/utils";
import { useState } from "react";
import { insertDailyMoodEntry } from "@/lib/server/actions";
import Button from "./generics/Button";

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

  useQuery({
    queryKey: ["insert_daily_mood_entry"],
    queryFn: () => insertDailyMoodEntry(user_id!, selectedMood!),
    enabled: enabled,
  });

  function setUserMood(mood: Mood) {
    setSelectedMood((prevSelectedMood) => {
      return prevSelectedMood === mood ? null : mood;
    });
  }

  function setOpacityLevel(mood: Mood) {
    if (selectedMood === null || mood === selectedMood) {
      return "opacity-100";
    }
    return "opacity-50";
  }

  return (
    <div>
      {
        <div>
          <h1 className="font-bold text-2xl animate-in">
            How are you feeling?
          </h1>
          <div className="grid grid-cols-5 py-2 gap-2">
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
          {selectedMood === 1 && <div>Very bad</div>}
          {selectedMood === 2 && <div>Bad</div>}
          {selectedMood === 3 && <div>Meh</div>}
          {selectedMood === 4 && <div>Ok</div>}
          {selectedMood === 5 && <div>Great</div>}
          <form action={() => setEnabled(true)}>
            <Button title="Submit" disabled={enabled}></Button>
          </form>
        </div>
      }
    </div>
  );
}
