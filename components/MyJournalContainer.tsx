"use client";
import JournalGridItem from "@/components/JournalGridItem";
import { useGetAuthenticatedUser, useGetLoggedDays } from "@/lib/server/hooks";

export default function MyJournalContainer() {
  const {
    data: authenticatedUser,
    isLoading: loadingAuthUser,
    error: authUserError,
  } = useGetAuthenticatedUser();

  const {
    data: userLoggedDays,
    isLoading: loadingUserLoggedDays,
    error: userLoggedDaysError,
  } = useGetLoggedDays(authenticatedUser?.id);

  console.log(userLoggedDays);

  return (
    <div>
      {!loadingUserLoggedDays && userLoggedDays && (
        <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex-1 flex flex-col justify-center items-center animate-in p-2">
              <h1 className="font-bold text-xl mb-2">
                Your mood the last{" "}
                <span className="underline underline-offset-4 decoration-app-dark-green decoration-2 ">
                  {userLoggedDays.length} days.
                </span>
              </h1>
              <div className="grid grid-cols-7 gap-2 rounded-sm py-2 mb-2 grid-animate-in">
                {userLoggedDays.map((item, index) => (
                  <JournalGridItem index={index} key={index} mood={item.mood} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
