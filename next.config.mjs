/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para el despliegue premium
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
};

export default nextConfig;
