import { cn, getAnimationDelay, mapMoodToColour } from "@/lib/utils";

interface MoodItemProps {
  index: number;
  mood?: number;
}

export default function JournalGridItem({ mood, index }: MoodItemProps) {
  return (
    <div
      className={cn(
        "p-3 h-10 opacity-1 grid-animate-in select-none rounded-sm bg-btn-background relative", // Add relative class
        mood && mapMoodToColour(mood)
      )}
      style={{
        animationDelay: `${getAnimationDelay(index)}s`,
      }}
    >
      {/* <div className="relative w-full">
        <div className="absolute top-0 right-0">03</div>
      </div> */}
    </div>
  );
}
