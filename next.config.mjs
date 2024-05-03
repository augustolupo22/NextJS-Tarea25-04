/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.maybelline.com.ar',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
