/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.cms-twdigitalassets.com',
                pathname: '/content/**',
            },
            {
                protocol: 'https',
                hostname: 'help.twitter.com',
                pathname: '/content/**',
            },
        ]
    }
}

module.exports = nextConfig
