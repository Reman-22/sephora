import { NextRequest, NextResponse } from "next/server";
import { localePrefix, locales } from "@/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { locale, basePath } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|_static|_vercel|[\\w-]+\\.\\w+).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};