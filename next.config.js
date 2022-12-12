const index = require("react-horizontal-strip-datepicker");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "ssakduk-front.s3.ap-northeast-2.amazonaws.com",
      "getstream.imgix.net",
      "ssakduk-admin-frontend-test.s3.ap-northeast-2.amazonaws.com",
      "ssakduk-client-frontend-test.s3.ap-northeast-2.amazonaws.com",
    ],
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/",
  trailingSlash: true,
};

module.exports = nextConfig;
