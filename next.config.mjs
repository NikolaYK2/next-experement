/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
                pathname: '/api/character/avatar/**'//** - означает что будет какая угодна картинка
            }
        ]
    }
};

export default nextConfig;
