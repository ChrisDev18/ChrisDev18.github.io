/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  basePath: process.env.NODE_ENV === 'production' ? "/chrisdev18.github.io" : ""
};

export default nextConfig;
