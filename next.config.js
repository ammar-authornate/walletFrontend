/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@amcharts/amcharts5']);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});