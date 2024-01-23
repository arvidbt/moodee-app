import { MyMoodContainer, PageLayout } from "@/components";
import { getAuthenticatedUser } from "@/lib/server/actions/get-authenticated-user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function MyMood() {
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
              <MyMoodContainer />
            </HydrationBoundary>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
