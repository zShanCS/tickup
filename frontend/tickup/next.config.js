/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['127.0.0.1']
    },
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/tours',
                permanent: true,
            },
        ];
    }
}

module.exports = nextConfig
