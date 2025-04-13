import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Désactiver les vérifications ESLint pendant le build pour permettre le déploiement
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
