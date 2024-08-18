/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'knjxysvpnobgllbfvtrj.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/web/**',
          },
        ],
      },
};

export default nextConfig;
