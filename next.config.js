/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"]  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },  
  "crons": [

    {

      "path": "/utils/updateNumbers.ts",
      "schedule": "0 0 * * *"

    }
}

module.exports = nextConfig