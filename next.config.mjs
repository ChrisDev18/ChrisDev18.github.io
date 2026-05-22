/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.188.48'],


  basePath: process.env.NODE_ENV === 'production' ? "/chrisdev18.github.io" : ""
};

export default nextConfig;
