/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "efcrkqhfjcmjuuczqhim.supabase.co",
        pathname: "/storage/v1/object/public/DishImages/**",
      },
    ],
  },
};

export default nextConfig;
