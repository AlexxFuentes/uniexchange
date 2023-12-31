/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'firebasestorage.googleapis.com',
        //         pathname: '/posts/**',
        //     }
        // ]
        domains: [
            'firebasestorage.googleapis.com', 
            'lh3.googleusercontent.com'
        ],
    }
}

module.exports = nextConfig
