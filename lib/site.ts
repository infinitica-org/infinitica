// Production URL: set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is attached.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const SITE = {
  name: "Infinitica",
  title: "Infinitica — We build products, forever",
  description: "Infinitica is an independent product company. We imagine, build and run our own software — products people open every single day.",
};

// Star mark paths, shared by the icons and the social image
export const MARK_PATHS = [
  "M55.5 25.5V40Q56.5 51 72.5 52",
  "M72.5 52Q56 53.5 52 72.5",
  "M52 72.5Q48.5 54 32 50.5",
  "M32 50.5Q49.5 49.5 49.5 42.5Q49.5 38 38 34.8L9 27.5",
];
