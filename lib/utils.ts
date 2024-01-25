import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAnimationDelay(index: number) {
  const column = index % 7;
  const row = Math.floor(index / 7);
  return row * 0.04 + column * 0.04;
}

export function getURL() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://moodee.vercel.app";
}

export function mapMoodToColour(user_mood: number): string {
  const moodColourMap: { [key: number]: string } = {
    1: "bg-app-red",
    2: "bg-app-orange",
    3: "bg-app-yellow",
    4: "bg-app-green",
    5: "bg-app-dark-green",
  };
  return moodColourMap[user_mood];
}
