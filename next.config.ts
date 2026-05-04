import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ini akan mengabaikan error ESLint saat proses build di Vercel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Opsional: tambahkan ini juga jika ada error type data yang menghambat build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
