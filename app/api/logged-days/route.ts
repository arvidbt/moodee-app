import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function PUT(request: Request) {
  const { title } = await request.json();
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const { data } = await supabase.from("logged_days");

  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts#managing-session-with-middleware
  return NextResponse.json(data);
}
