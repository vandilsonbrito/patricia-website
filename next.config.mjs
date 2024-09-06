/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    amp: {
        canonicalBase: 'https://www.profapatriciacruz.com.br/',
      },
      images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
            },
          ],
        },
    
};

export default nextConfig;
