"use client";

import { cn, mapMoodToColour } from "@/lib/utils";
import { useState } from "react";
import Button from "./generics/Button";

const moods = [1, 2, 3, 4, 5] as const;
export type Mood = (typeof moods)[number];

export default function TemporaryName() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  function insertUserMood(mood: Mood) {
    setSelectedMood(mood);
  }

  function setOpacityLevel(mood: Mood) {
    if (selectedMood === null || mood === selectedMood) {
      return "opacity-100";
    }
    return "opacity-50";
  }

  return (
    <div>
      {/* {isLoading && <Spinner />} */}
      {!isLoading && (
        <div>
          <h1 className="font-bold text-2xl animate-in">
            How are you feeling?
          </h1>
          <div className="grid grid-cols-5 py-2 gap-2">
            {moods.map((mood) => (
              <button
                onClick={() => insertUserMood(mood)}
                key={mood}
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-14 h-14 rounded-md outline-none shadow-lg transform active:scale-50 transition-transform",
                  mapMoodToColour(mood),
                  setOpacityLevel(mood)
                )}
              ></button>
            ))}
          </div>
          <div></div>
          <input></input>
          <Button title="Submit"></Button>
        </div>
      )}
    </div>
  );
}
