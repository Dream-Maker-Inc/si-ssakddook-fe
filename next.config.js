const index = require("react-horizontal-strip-datepicker");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "ssakduk-fe.s3.ap-northeast-2.amazonaws.com",
      "ssakduk-admin-fe.s3.ap-northeast-2.amazonaws.com",
      "ssakduk-admin-front.s3.ap-northeast-2.amazonaws.com",
      "ssakduk-front.s3.ap-northeast-2.amazonaws.com",
      "getstream.imgix.net",
    ],
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/",
  trailingSlash: true,
};

module.exports = nextConfig;
