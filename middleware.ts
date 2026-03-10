import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["he", "en", "fr"],
  defaultLocale: "he",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
