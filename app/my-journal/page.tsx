import { MyJournalContainer, PageLayout } from "@/components";
import JournalGridItem from "@/components/JournalGridItem";
import { getAuthenticatedUser } from "@/lib/server/actions";
import { useGetAuthenticatedUser, useGetLoggedDays } from "@/lib/server/hooks";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function MyJournal() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["authenticated_user"],
    queryFn: getAuthenticatedUser,
  });
  return (
    <PageLayout>
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 flex flex-col justify-center items-center animate-in">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <MyJournalContainer />
            </HydrationBoundary>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
