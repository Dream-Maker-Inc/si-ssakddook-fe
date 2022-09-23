/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.pixabay.com", "ureca.s3.ap-northeast-2.amazone.com"],
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
