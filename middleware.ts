import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let accessToken;
  if (typeof window !== "undefined") {
    accessToken = localStorage?.getItem("accessToken");
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/chat", "/chat/:path*"],
};
