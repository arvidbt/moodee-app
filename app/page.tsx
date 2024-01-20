import { MoodeeIcon, PageLayout } from "@/components";
import { useSupabaseServer } from "@/lib/supabase/server";
import { cn, getAnimationDelay } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { use } from "react";

export default function Index() {
  // Server call.
  const userIsAuthenticated = () => {
    const res = use(useSupabaseServer().auth.getUser());
    if (res.data.user !== null) {
      return redirect("/home");
    }
  };

  userIsAuthenticated();

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Keep a journal of your daily{" "}
              <span className="gradient-text">mood</span>.
            </h1>
            <div className="grid grid-cols-7 gap-2">
              {grid.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 h-12 opacity-0 grid-animate-in select-none rounded-sm",
                    getRandomColor()
                  )}
                  style={{
                    animationDelay: `${getAnimationDelay(index)}s`,
                    opacity: getOpacityLevel(index),
                  }}
                >
                  {""}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="animate-in flex flex-col opacity-0 max-w-4xl px-3">
          <div className="flex-1 flex flex-col gap-6 p-2">
            <div className="flex-1 flex flex-col justify-center items-center gap-2 animate-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-md border-2 border-foreground/10">
                  <p className="text-base font-medium m-2">
                    <span className="inline-block align-middle mr-2">
                      <MoodeeIcon width="15" height="15"></MoodeeIcon>
                    </span>
                    Tracking your mood has been demonstrated as an effective
                    practice for enhancing self-awareness and pinpointing
                    potential triggers that could impact your mental well-being.
                    Embarking on a new routine can often be challenging, and
                    recognizing this, Moodee is designed with an exceptionally
                    accessible entry point. Just sign in, effortlessly express
                    your current mood, and log out – no additional steps
                    required.
                  </p>
                </div>
                <div className="p-4 rounded-md border-2 border-foreground/10">
                  <ul>
                    <li className="flex items-center gap-2 py-1">
                      <div className="w-8 h-8 bg-app-dark-green rounded-sm"></div>
                      <p>Today was a great day. </p>
                    </li>
                    <li className="flex items-center gap-2 py-1">
                      <div className="w-8 h-8 bg-app-green rounded-sm"></div>
                      <p>Today was a good day.</p>
                    </li>
                    <li className="flex items-center gap-2 py-1">
                      <div className="w-8 h-8 bg-app-yellow rounded-sm"></div>
                      <p>Today was an average day.</p>
                    </li>
                    <li className="flex items-center gap-2 py-1">
                      <div className="w-8 h-8 bg-app-orange rounded-sm"></div>
                      <p>Today was a bad day.</p>
                    </li>
                    <li className="flex items-center gap-2 py-1">
                      <div className="w-8 h-8 bg-app-red rounded-sm"></div>
                      <p>Today was an awful day.</p>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-md border-2 border-foreground/10">
                  <p className="text-base font-medium m-2">
                    <span className="inline-block align-middle mr-2">
                      <MoodeeIcon width="15" height="15"></MoodeeIcon>
                    </span>
                    Moodee is a simple service, all you need to do is to try to
                    log your mood daily. To encourage your new routine, Moodee
                    creates a map of your mood that you can watch grow as your
                    log more days. This data is exportable to CSV format so that
                    you can play with it on your own and create your own
                    visualisations.
                  </p>
                </div>
                <div className="p-4 rounded-md border-2 border-foreground/10">
                  <p className="text-base font-medium m-2">
                    <span className="inline-block align-middle mr-2">
                      <MoodeeIcon width="15" height="15"></MoodeeIcon>
                    </span>
                    Your data is your own, and Moodee keeps it confidential and
                    does not pass it on to other actors. Moodee keeps your data
                    in compliance with <span>SOC 2</span> and <span>HIPAA</span>
                    , as well as encrypting all your data at rest with{" "}
                    <span>AES-256</span> and in transit data with{" "}
                    <span>TLS</span>. Additionally, none of your personal
                    information (
                    <span className="font-light">i.e., e-mail, name etc</span>)
                    is permanently stored. To delete data related to you, visit
                    your journal and press{" "}
                    <span className="text-app-red">delete account</span>.
                    <br></br>
                    <br></br>Read more about Moodee's storage provider{" "}
                    <span className="text-app-dark-green underline">
                      <Link href={"https://supabase.com/security"}>here</Link>
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

{
  /* <div className="p-4 rounded-md border-2 border-foreground/10">
<h1 className="font-bold text-xl text-app-green">Why and How?</h1>
<div className="flex justify-center items-center">
  <p className="text-base font-medium m-2">
    <span className="inline-block align-middle mr-2">
      <MoodeeIcon width="15" height="15"></MoodeeIcon>
    </span>
    Tracking your mood has been demonstrated as an effective
    practice for enhancing self-awareness and pinpointing
    potential triggers that could impact your mental well-being.
    Embarking on a new routine can often be challenging, and
    recognizing this, Moodee is designed with an exceptionally
    accessible entry point. Just sign in, effortlessly express
    your current mood, and log out – no additional steps required.
  </p>
</div>
<div className="m-2">
  <ul>
    <li className="flex items-center gap-2 py-1">
      <div className="w-8 h-8 bg-app-dark-green rounded-sm"></div>
      <p>Today was a great day. </p>
    </li>
    <li className="flex items-center gap-2 py-1">
      <div className="w-8 h-8 bg-app-green rounded-sm"></div>
      <p>Today was a good day.</p>
    </li>
    <li className="flex items-center gap-2 py-1">
      <div className="w-8 h-8 bg-app-yellow rounded-sm"></div>
      <p>Today was an average day.</p>
    </li>
    <li className="flex items-center gap-2 py-1">
      <div className="w-8 h-8 bg-app-orange rounded-sm"></div>
      <p>Today was a bad day.</p>
    </li>
    <li className="flex items-center gap-2 py-1">
      <div className="w-8 h-8 bg-app-red rounded-sm"></div>
      <p>Today was an awful day.</p>
    </li>
  </ul>
</div>
</div>
<div className="p-4 rounded-md border-2 border-foreground/10">
<h1 className="font-bold text-xl flex text-app-orange">
  Features.
</h1>
<div className="flex justify-center items-center">
  <p className="text-base font-medium m-2">
    <span className="inline-block align-middle mr-2">
      <MoodeeIcon width="15" height="15"></MoodeeIcon>
    </span>
    Moodee is a simple service, all you need to do is to try to
    log your mood daily. To encourage your new routine, Moodee
    creates a map of your mood that you can watch grow as your log
    more days. This data is exportable to CSV format so that you
    can play with it on your own and create your own
    visualisations.
  </p>
</div>
</div>
<div className="p-4 rounded-md border-2 border-foreground/10">
<h1 className="font-bold text-xl flex text-app-red">Privacy.</h1>
<div className="flex justify-center items-center">
  <p className="text-base font-medium m-2">
    <span className="inline-block align-middle mr-2">
      <MoodeeIcon width="15" height="15"></MoodeeIcon>
    </span>
    Your data is your own, and Moodee keeps it confidential and
    does not pass it on to other actors. Moodee keeps your data in
    compliance with <span>SOC 2</span> and <span>HIPAA</span>, as
    well as encrypting all your data at rest with{" "}
    <span>AES-256</span> and in transit data with <span>TLS</span>
    . Additionally, none of your personal information (
    <span className="font-light">i.e., e-mail, name etc</span>) is
    permanently stored. To delete data related to you, visit your
    journal and press{" "}
    <span className="text-app-red">delete account</span>.<br></br>
    <br></br>Read more about Moodee's storage provider{" "}
    <span className="text-app-dark-green underline">
      <Link href={"https://supabase.com/security"}>here</Link>
    </span>
    .
  </p>
</div>
</div> */
}
