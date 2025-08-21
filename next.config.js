/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'villaqrmenu.b-cdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 