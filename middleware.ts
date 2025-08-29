import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "bn"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];
  if (locales.includes(pathLocale)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\..*).*)"]
};
