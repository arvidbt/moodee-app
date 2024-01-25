import { PageLayout } from "@/components";
import { cn, getAnimationDelay } from "@/lib/utils";

export default function Index() {
  const sizeOfGrid = 7;
  const grid = Array.from({ length: sizeOfGrid * 4 });
  const opacityLevelStep = (100 - 5) / (sizeOfGrid - 3);

  function getRandomColor(): string {
    const colors = [
      { color: "bg-app-dark-green", weight: 15 },
      { color: "bg-app-green", weight: 35 },
      { color: "bg-app-yellow", weight: 25 },
      { color: "bg-app-orange", weight: 15 },
      { color: "bg-app-red", weight: 10 },
    ];

    let totalWeight = colors.reduce((sum, item) => sum + item.weight, 0);
    let randomNum = Math.random() * totalWeight;

    for (const item of colors) {
      randomNum -= item.weight;
      if (randomNum < 0) {
        return item.color;
      }
    }
    return "bg-app-green";
  }

  function getOpacityLevel(index: number) {
    return 1 - (Math.floor(index / sizeOfGrid) * opacityLevelStep) / 100;
  }

  return (
    <PageLayout>
      <div className="m-auto flex flex-col gap-10">
        <div className="animate-in flex flex-col opacity-0 max-w-4xl px-3">
          <div className="flex-1 flex flex-col gap-6 p-2">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Keep a journal of your daily{" "}
              <span className="gradient-text">mood</span> with Moodee.
            </h1>
            <p className="text-center font-semibold sm:text-xl md:text-xl lg:text-2xl">
              Track your mood, boost self-awareness, and identify mental
              well-being triggers with ease.{" "}
              <span className="font-black">Moodee</span>: A seamless,
              straightforward approach to mood tracking, built with simplicity
              in focus. Sign in, express, log out.
            </p>
            <div className="grid grid-cols-7 gap-2">
              {grid.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 h-12  grid-animate-in select-none rounded-sm",
                    getRandomColor()
                  )}
                  style={{
                    animationDelay: `${getAnimationDelay(index)}s`,
                  }}
                >
                  {""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
