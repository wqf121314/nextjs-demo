/** @type {import('next').NextConfig} */
const nextConfig = {
    //严格模式
    // reactStrictMode:false
    images: {
        remotePatterns: [
            {
                hostname: 'tailwindui.com',
            },
        ],
    },
};

export default nextConfig;
