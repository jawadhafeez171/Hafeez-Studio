/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/websites',
        destination: '/#pricing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
