// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;


// // next.config.js

// Nhập plugin next-intl
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Kết hợp cấu hình next-intl với cấu hình Next.js
module.exports = withNextIntl(nextConfig);

