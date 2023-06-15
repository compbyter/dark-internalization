/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "tr-TR"],
    defaultLocale: "tr-TR",
  },
  react: { useSuspense: false },
  experimental: {
    externalDir: {
      enabled: true,
      silent: true,
    },
    serverActions: true, // experimental.serverActions seçeneği eklendi
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
