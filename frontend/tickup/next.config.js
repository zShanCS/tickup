/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['127.0.0.1','ztickup.herokuapp.com','res.cloudinary.com']
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
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://ztickup.herokuapp.com/:path*',
        },
      ]
    },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/(.*)",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              {
                key: "Access-Control-Allow-Methods",
                value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
              },
              {
                key: "Access-Control-Allow-Headers",
                value:
                  "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
              },
            ],
          },
        ]
      },
}

module.exports = nextConfig
