/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//   serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
// },
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
