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
