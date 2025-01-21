// Load environment variables from .env file
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
  },
  // You can add other Next.js configurations here
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['cdn.sanity.io'],
//     },
//   };
  
//   export default nextConfig;
  