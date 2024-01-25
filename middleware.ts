import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getURL } from "./lib/utils";
import { env } from "./lib";

export async function middleware(request: NextRequest) {
  const defaultUrl = getURL();
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    }
  );

  const authRequiredUrls = ["/my-mood", "/my-journal", "my-dashboard"];

  const { data } = await supabase.auth.getUser();
  if (
    data.user === null &&
    authRequiredUrls.some((e) => request.url.includes(e))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (data.user !== null && request.url === `${defaultUrl}/`) {
    return NextResponse.redirect(new URL("/my-journal", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
