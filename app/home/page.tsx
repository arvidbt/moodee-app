import { HomeScreen, PageLayout } from "@/components";
import { getAuthenticatedUser } from "@/lib/server/actions/get-authenticated-user";
import { UUID } from "crypto";

export default async function Home() {
  const user = await getAuthenticatedUser();
  const user_id = user?.id as UUID;

  return (
    <PageLayout>
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 flex flex-col justify-center items-center animate-in">
            <HomeScreen user_id={user_id} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
