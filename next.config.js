/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NEXT_PUBLIC_ENV === 'development',
  register: true,
  runtimeCaching,
});

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_ENV !== 'development',
  },
};

module.exports = withPWA(nextConfig);
